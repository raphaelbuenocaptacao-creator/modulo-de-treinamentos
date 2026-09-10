const CACHE_PREFIX='capta-academy-';
const CACHE=`${CACHE_PREFIX}v9-private-vary-range-safe-shell`;
const CORE=['./','./index.html','./styles.css','./app.js','./pwa.js','./manifest.webmanifest','./pwa-icon-192.png','./pwa-icon-512.png','./pwa-icon-maskable-512.png'];
const CORE_PATHS=new Set(CORE.map(path=>new URL(path,self.registration.scope).pathname));
const SENSITIVE_PARAMS=['token','access_token','refresh_token','password','passwd','session','session_id','api_key','apikey','code','credential','credentials','secret'];
const PRIVATE_PATH=/(?:^|\/)(?:api|auth|login|logout|session|account|profile|rest|functions|storage|graphql)(?:\/|$)/i;
const isSensitive=(request,url)=>request.headers.has('authorization')||request.headers.has('cookie')||request.headers.has('range')||request.headers.has('if-range')||SENSITIVE_PARAMS.some(key=>url.searchParams.has(key))||PRIVATE_PATH.test(url.pathname);
const hasUnsafeVary=response=>(response.headers.get('vary')||'').split(',').some(value=>['*','cookie','authorization','range','if-range'].includes(value.trim().toLowerCase()));
const isCacheable=response=>response&&response.ok&&response.type==='basic'&&!response.redirected&&response.status!==206&&!response.headers.has('content-range')&&!response.headers.has('set-cookie')&&!hasUnsafeVary(response)&&!/(?:private|no-store)/i.test(response.headers.get('cache-control')||'');

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    for(const asset of CORE){
      try{
        const response=await fetch(new URL(asset,self.registration.scope),{credentials:'omit',cache:'reload',redirect:'error'});
        if(isCacheable(response))await cache.put(new URL(asset,self.registration.scope),response.clone());
      }catch(_){/* keep install resilient; offline fallback is best-effort */}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||url.hostname.includes('supabase.co')||isSensitive(request,url))return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{return await fetch(request,{cache:'no-store',redirect:'error'});}
      catch(_){return (await caches.match(new URL('./index.html',self.registration.scope)))||Response.error();}
    })());
    return;
  }

  if(url.search||!CORE_PATHS.has(url.pathname))return;
  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    const response=await fetch(request,{credentials:'omit',cache:'no-store',redirect:'error'});
    if(isCacheable(response)){
      const cache=await caches.open(CACHE);
      await cache.put(request,response.clone());
    }
    return response;
  })());
});
