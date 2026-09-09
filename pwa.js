(()=>{
  if(!('serviceWorker' in navigator)||!window.isSecureContext)return;

  let deferredPrompt=null;
  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    deferredPrompt=event;
    window.dispatchEvent(new CustomEvent('captaacademy:installavailable'));
  });

  window.installCaptaAcademy=async()=>{
    if(!deferredPrompt)return false;
    deferredPrompt.prompt();
    const choice=await deferredPrompt.userChoice;
    deferredPrompt=null;
    return choice?.outcome==='accepted';
  };

  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js?v=8-private-vary-range-safe-shell',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(()=>{});
  });

  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    window.dispatchEvent(new CustomEvent('captaacademy:installed'));
  });
})();
