export function isApplicationClosed() {
    try {
      const config = useRuntimeConfig();
      const applicationCloseDate = config.public.applicationCloseDate;
      
      // Handle case where config might not be available
      if (!applicationCloseDate) {
        console.warn('Application close date not found in config');
        return false;
      }
      
      const [day, month, year] = applicationCloseDate.split('/');
      const closeDateObj = new Date(year, month - 1, day); // month is 0-indexed
      const currentDate = new Date();
      
      return currentDate > closeDateObj;
    } catch (error) {
      console.error('Error checking application status:', error);
      return false;
    }
  }