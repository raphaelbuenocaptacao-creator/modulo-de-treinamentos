(()=>{
  if(!('serviceWorker' in navigator)||!window.isSecureContext)return;
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js?v=6-isolated-private-safe-shell',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(()=>{});
  });
  window.addEventListener('appinstalled',()=>{
    const button=document.querySelector('#installBtn');
    if(button)button.hidden=true;
  });
})();
