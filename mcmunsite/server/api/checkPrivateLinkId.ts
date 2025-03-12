// The Private Key implementation is not secure, only meant to be a small hinderance to people who want to view
// certain semi-restricted content. It is not meant to be a secure way to control access to pages.

export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event);
      const status = checkID(body.id);
      const fingerprint = body.fp;
  
      if (status.valid) {
        console.log(`New private link request: ${body.id}, ${JSON.stringify(fingerprint)}`);
      }
  
      return status;
    } catch (error) {
      const body = await readBody(event);
      console.log(`Error while checking private key request: ${error}, body: ${JSON.stringify(body)}`);
      return { success: false, status: 5002, message: 'Error while checking private key.' };
    }
  });
  
  function checkID(key: string) {
    if (key.length !== 16) {
      return { valid: false, message: "Key must be exactly 16 characters long" };
    }
  
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
  
    for (let i = 0; i < key.length; i++) {
      if (i % 2 === 0) {
        if (!letters.includes(key[i])) {
          return { valid: false, message: `Character at index ${i} should be a letter, but found '${key[i]}'` };
        }
      } else {
        if (!digits.includes(key[i])) {
          return { valid: false, message: `Character at index ${i} should be a digit, but found '${key[i]}'` };
        }
      }
    }
  
    let asciiSum = 0;
    for (let i = 0; i < key.length; i++) {
      asciiSum += key.charCodeAt(i);
    }
    if (asciiSum % 7 !== 0 || asciiSum % 15 !== 0) {
      return { valid: false, message: `The sum of ASCII values is not divisible by both 7 and 15 (sum = ${asciiSum})` };
    }
  
    // Condition 4: Check if no two consecutive characters are adjacent in ASCII values
    for (let i = 1; i < key.length; i++) {
      if (Math.abs(key.charCodeAt(i) - key.charCodeAt(i - 1)) === 1) {
        return { valid: false, message: `Characters at index ${i - 1} and ${i} are consecutive in ASCII values` };
      }
    }
  
    // If all conditions are satisfied
    return { valid: true, message: "Key is valid" };
  }