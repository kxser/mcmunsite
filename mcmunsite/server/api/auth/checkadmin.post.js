
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const email = body.email;
    const adminMailAdresses = useRuntimeConfig(event).adminMailAdresses;


    let adminMails;
    if (Array.isArray(adminMailAdresses)) {
        adminMails = adminMailAdresses;
    } else if (typeof adminMailAdresses === 'string' && adminMailAdresses.startsWith('[')) {
        try {
            adminMails = JSON.parse(adminMailAdresses);
        } catch (e) {
            adminMails = adminMailAdresses.split(',').map(m => m.trim());
        }
    } else {
        adminMails = adminMailAdresses.split(',').map(m => m.trim());
    }

    const isAdmin = adminMails.some(adminMail => 
        adminMail.toLowerCase() === email.toLowerCase()
    );


    console.log(`Admin check for ${email}: ${isAdmin}`);


    return {
        success: true,
        isAdmin: isAdmin,
        message: isAdmin ? 'User is an admin' : 'User is not an admin'
    };


  } catch (error) {
    console.log(
      `Error: ${error}, ${async () =>
        await readBody(event)}`
    );
    return {
      success: false,
      status: 5002,
      message: "Error.",
    };
  }
});
