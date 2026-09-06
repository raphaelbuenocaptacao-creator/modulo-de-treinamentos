const CACHE='capta-academy-v5-raster-safe-shell';
const CORE=['./','./index.html','./styles.css','./app.js','./pwa.js','./manifest.webmanifest','./pwa-icon-192.png','./pwa-icon-512.png','./pwa-icon-maskable-512.png'];
const CORE_PATHS=new Set(CORE.map(path=>new URL(path,self.location.href).pathname));
const SENSITIVE_PARAMS=['token','access_token','refresh_token','password','passwd','session','session_id','api_key','apikey','code','credential','credentials'];
const PRIVATE_PATH=/(?:^|\/)(?:api|auth|rest|functions|storage|graphql)(?:\/|$)/i;
const isSensitive=(request,url)=>request.headers.has('authorization')||request.headers.has('cookie')||request.headers.has('range')||request.headers.has('if-range')||SENSITIVE_PARAMS.some(key=>url.searchParams.has(key))||PRIVATE_PATH.test(url.pathname);
const hasSensitiveVary=response=>/(?:^|,|\s)(?:cookie|authorization)(?:\s|,|$)/i.test(response.headers.get('vary')||'');
const isCacheable=response=>response&&response.ok&&response.type==='basic'&&!response.redirected&&response.status!==206&&!response.headers.has('content-range')&&!response.headers.has('set-cookie')&&!hasSensitiveVary(response)&&!/(?:private|no-store)/i.test(response.headers.get('cache-control')||'');
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||url.hostname.includes('supabase.co')||isSensitive(request,url))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request,{cache:'no-store',redirect:'manual'}).then(response=>response.type==='opaqueredirect'?Promise.reject(new Error('redirect')):response).catch(()=>caches.match('./index.html')));
    return;
  }
  if(!CORE_PATHS.has(url.pathname))return;
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request,{cache:'no-store',redirect:'manual'}).then(response=>{
    if(isCacheable(response)){
      const copy=response.clone();
      event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));
    }
    return response;
  })));
});
