

//v1.0
export const transformString = (
    inputData: string,
    params: string[],
    maxLength: number = 64
) => {

    // Helper function to make string MongoDB safe
    const mongoDBSafe = (str: string) => str.replace(/[$.]/g, '');

    // Helper function to escape JavaScript code
    const escapeJS = (str: string) => str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

    // Helper function to escape Bash characters and remove specific keywords
    const escapeBash = (str: string) => {
        const bashKeywords = /\b(zsh|bash|top|btop|grep|uname|wget|sudo|ssh|git|curl|pwd|cd|cp|rm|mv|kill)\b/gi;
        return str.replace(/([;&|`$\\])/g, '\\$1').replace(bashKeywords, '');
    };

    // Helper function to redact IP addresses
    const redactIP = (str: string) => str.replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[REDACTEDIP]');

    // Start with trimmed input
    let sanitizedString = String(inputData).trim();

    // Map of transformations
    const transformations: {
        [key: string]: (str: string) => string
    } = {
        'uppercase': (str) => str.replace('i', 'İ').replace("ı", 'I').toUpperCase(),
        'lowercase': (str) => str.toLowerCase(),
        'noSpecialChars': (str) => str.replace(/[^a-zA-Z0-9\sçÇğĞıİöÖşŞüÜâÂ]/g, ''),
        'noNumbers': (str) => str.replace(/[0-9]/g, ''),
        'onlyNumbers': (str) => str.replace(/[^0-9]/g, ''),
        'mongoDBSafe': mongoDBSafe,
        'escapeJS': escapeJS,
        'escapeBash': escapeBash,
        'redactIP': redactIP,
    };

    // Apply transformations based on params
    for (const param of params) {
        if (transformations[param]) {
            sanitizedString = transformations[param](sanitizedString);
        }
    }

    // Enforce maxLength
    if (sanitizedString.length > maxLength) {
        sanitizedString = sanitizedString.substring(0, maxLength);
    }

    return String(sanitizedString.trim());
};

// Example usage:
