window.addEventListener('load', async () => {

  try { 
    if(navigator.serviceWorker) {
      const reg = await navigator.serviceWorker.register('./sw.js')
      console.log('Service Worker registr Success', reg.scope)
    }
  } catch (error) {
    console.log('Service Worker registr Fail')
  }
})