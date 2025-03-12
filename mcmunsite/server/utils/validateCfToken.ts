export const validateCfToken = async (cfTurnstileToken: string, cfTurnstileSecret: string) => {
  

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
          secret: cfTurnstileSecret,
          response: cfTurnstileToken,
      }),
  });
  
  const data = await response.json();
  
  if (data.success) {
      return {
          success: true,
          response: "Successfully verified CF Turnstile Token.",
          statusCode: 1000
      };
  }
  
  return {
      success: false,
      response: "Unknown error in Turnstile authentication backend.",
      statusCode: 5002
  }
  };
  