(()=>{
  if(!('serviceWorker' in navigator)||!window.isSecureContext)return;
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js?v=7-private-vary-safe-shell',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(()=>{});
  });
  window.addEventListener('appinstalled',()=>{
    const button=document.querySelector('#installBtn');
    if(button)button.hidden=true;
  });
})();
