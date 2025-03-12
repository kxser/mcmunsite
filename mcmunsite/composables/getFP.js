export default function getFP() {
    try {
  
    
    if (process.client && typeof window !== 'undefined') {
      return import('clientjs').then((module) => {
        const ClientJS = module.default; // Get the default export
        const browser = new ClientJS.ClientJS()
  
        return {
          cpu: browser.getCPU(),
          isMobileAndroid: browser.isMobileAndroid(),
          isMobileIOS: browser.isMobileIOS(),
          resolution: browser.getAvailableResolution(),
          os: browser.getOS(),
          fpHash: browser.getFingerprint(),
          fp: browser.getBrowserData(),
          timestamp: new Date(Date.now() + 0 * 60 * 60 * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '.'),
  
  
        }
      });
    } else {
      return Promise.resolve({
        fingerprint: null, 
        rawFingerprint: null, 
        timestamp: null,
      }); 
    }
    } catch(e) {
      return Promise.resolve({
        fingerprint: null, 
        rawFingerprint: null, 
        timestamp: null,
      });
    }
  
  
  }
  