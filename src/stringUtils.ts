/**
 * String Utility Library
 * A comprehensive collection of string manipulation utilities
 */

// Case Manipulation Functions
/**
 * Capitalizes the first letter of a string
 * @param {string} str - The input string
 * @returns {string} The string with first letter capitalized
 * @example
 * capitalize('hello world'); // 'Hello world'
 * capitalize(''); // ''
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string' || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param {string} str - The input string
 * @returns {string} The camelCase string
 * @example
 * camelCase('hello world'); // 'helloWorld'
 * camelCase('Hello-World'); // 'helloWorld'
 * camelCase('hello_world'); // 'helloWorld'
 */
export function camelCase(str: string): string {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/[\s_-]+(\w)/g, (_, p) => p.toUpperCase())
    .replace(/[^\w\s]|_/g, '')
    .replace(/^[A-Z]/, match => match.toLowerCase());
}

/**
 * Converts a string to PascalCase
 * @param {string} str - The input string
 * @returns {string} The PascalCase string
 * @example
 * pascalCase('hello world'); // 'HelloWorld'
 * pascalCase('hello-world'); // 'HelloWorld'
 */
export function pascalCase(str: string): string {
  if (typeof str !== 'string') return '';
  
  const camelized = camelCase(str);
  return capitalize(camelized);
}

/**
 * Converts a string to snake_case
 * @param {string} str - The input string
 * @returns {string} The snake_case string
 * @example
 * snakeCase('hello world'); // 'hello_world'
 * snakeCase('helloWorld'); // 'hello_world'
 */
export function snakeCase(str: string): string {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/[^\w\s]/g, ' ')  // Replace special chars with spaces
    .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');
}

/**
 * Converts a string to kebab-case
 * @param {string} str - The input string
 * @returns {string} The kebab-case string
 * @example
 * kebabCase('hello world'); // 'hello-world'
 * kebabCase('helloWorld'); // 'hello-world'
 */
export function kebabCase(str: string): string {
  if (typeof str !== 'string') return '';
  
  return snakeCase(str).replace(/_/g, '-');
}

/**
 * Converts a string to Title Case
 * @param {string} str - The input string
 * @returns {string} The Title Case string
 * @example
 * titleCase('hello world'); // 'Hello World'
 */
export function titleCase(str: string): string {
  if (typeof str !== 'string') return '';
  
  // Handle empty string
  if (!str) return '';
  
  // List of small words to not capitalize (common in title case rules)
  const smallWords = /^(a|an|and|as|at|but|by|for|if|in|nor|of|on|or|over|per|the|to|vs?\.?|via)$/i;
  
  return str.toLowerCase()
    .split(/\s+/)
    .map((word, index, array) => {
      // Always capitalize the first and last word
      if (index === 0 || index === array.length - 1) {
        return capitalize(word);
      }
      
      // Don't capitalize small words unless they're the first or last word
      if (smallWords.test(word)) {
        return word;
      }
      
      return capitalize(word);
    })
    .join(' ');
}

// Text Transformation Functions
/**
 * Truncates text to specified length with optional suffix
 * @param {string} str - The input string
 * @param {number} length - Maximum length of the string
 * @param {string} [suffix=''] - Suffix to add if truncated
 * @returns {string} The truncated string
 * @example
 * truncate('Hello world', 5); // 'Hello'
 * truncate('Hello world', 5, '...'); // 'Hello...'
 */
export function truncate(str: string, length: number, suffix = ''): string {
  if (typeof str !== 'string') return '';
  if (typeof length !== 'number' || length < 0) return str;
  
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
}

/**
 * Truncates text with ellipsis if it exceeds length
 * @param {string} str - The input string
 * @param {number} length - Maximum length including ellipsis
 * @returns {string} The string with ellipsis if truncated
 * @example
 * ellipsis('Hello world', 8); // 'Hello...'
 */
export function ellipsis(str: string, length: number): string {
  if (typeof str !== 'string') return '';
  if (typeof length !== 'number' || length < 3) return str;
  
  if (str.length <= length) return str;
  
  // Ensure at least one character is preserved before ellipsis
  const visibleChars = Math.max(1, length - 3);
  return truncate(str, visibleChars, '...');
}

/**
 * Reverses a string
 * @param {string} str - The input string
 * @returns {string} The reversed string
 * @example
 * reverse('hello'); // 'olleh'
 */
export function reverse(str: string): string {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

/**
 * Converts a string to a URL-friendly slug
 * @param {string} str - The input string
 * @returns {string} The slugified string
 * @example
 * slugify('Hello World!'); // 'hello-world'
 */
export function slugify(str: string): string {
  if (typeof str !== 'string') return '';
  
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-')  // Replace spaces, underscores, and hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
}

/**
 * Removes HTML tags from a string
 * @param {string} str - The input string with HTML
 * @returns {string} The string without HTML tags
 * @example
 * stripHTML('<p>Hello <b>world</b></p>'); // 'Hello world'
 */
export function stripHTML(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Removes all punctuation from a string
 * @param {string} str - The input string
 * @returns {string} The string without punctuation
 * @example
 * stripPunctuation('Hello, world!'); // 'Hello world'
 */
export function stripPunctuation(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[^\w\s]/g, '');
}

// Text Analysis Functions
/**
 * Counts words in a string
 * @param {string} str - The input string
 * @returns {number} The number of words
 * @example
 * countWords('Hello world'); // 2
 */
export function countWords(str: string): number {
  if (typeof str !== 'string') return 0;
  if (!str.trim()) return 0;
  
  return str.trim().split(/\s+/).length;
}

/**
 * Counts occurrences of a substring in a string
 * @param {string} str - The input string
 * @param {string} substr - The substring to count
 * @returns {number} The number of occurrences
 * @example
 * countOccurrences('hello hello world', 'hello'); // 2
 */
export function countOccurrences(str: string, substr: string): number {
  if (typeof str !== 'string' || typeof substr !== 'string' || !substr) return 0;
  
  let count = 0;
  let pos = str.indexOf(substr);
  
  while (pos !== -1) {
    count++;
    pos = str.indexOf(substr, pos + 1);
  }
  
  return count;
}

/**
 * Checks if string is a valid email
 * @param {string} str - The input string
 * @returns {boolean} True if string is a valid email
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 */
export function isEmail(str: string): boolean {
  if (typeof str !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Checks if string is a valid URL
 * @param {string} str - The input string
 * @returns {boolean} True if string is a valid URL
 * @example
 * isURL('https://example.com'); // true
 * isURL('not a url'); // false
 */
export function isURL(str: string): boolean {
  if (typeof str !== 'string') return false;
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if string contains a substring
 * @param {string} str - The input string
 * @param {string} substr - The substring to check for
 * @param {boolean} [caseSensitive=true] - Whether the check is case sensitive
 * @returns {boolean} True if substring is found
 * @example
 * containsSubstring('Hello World', 'world', false); // true
 * containsSubstring('Hello World', 'world', true); // false
 */
export function containsSubstring(str: string, substr: string, caseSensitive = true): boolean {
  if (typeof str !== 'string' || typeof substr !== 'string') return false;
  
  if (caseSensitive) {
    return str.includes(substr);
  }
  
  return str.toLowerCase().includes(substr.toLowerCase());
}

/**
 * Checks if string contains emoji
 * @param {string} str - The input string
 * @returns {boolean} True if emoji is found
 * @example
 * hasEmoji('Hello 😀'); // true
 * hasEmoji('Hello world'); // false
 */
export function hasEmoji(str: string): boolean {
  if (typeof str !== 'string') return false;
  
  // This is a simplified emoji regex (not comprehensive)
  const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  return emojiRegex.test(str);
}

// String Generation Functions
/**
 * Options for random string generation
 */
export interface RandomStringOptions {
  numbers?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  symbols?: boolean;
}

/**
 * Generates a random string
 * @param {number} length - Length of the generated string
 * @param {RandomStringOptions} [options] - Generation options
 * @returns {string} A random string
 * @example
 * randomString(8); // 'aB3cD4eF'
 * randomString(5, { uppercase: false, symbols: true }); // 'a2b#d'
 */
export function randomString(length: number, options: RandomStringOptions = {}): string {
  if (typeof length !== 'number' || length <= 0) return '';
  
  const defaultOptions: RandomStringOptions = {
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false
  };
  
  const config = { ...defaultOptions, ...options };
  let chars = '';
  
  if (config.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (config.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (config.numbers) chars += '0123456789';
  if (config.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  if (chars.length === 0) return '';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  
  return result;
}

/**
 * Returns singular or plural form based on count
 * @param {string} singular - Singular form of the word
 * @param {string} plural - Plural form of the word
 * @param {number} count - Count to determine form
 * @returns {string} The appropriate form with count
 * @example
 * pluralize('item', 'items', 1); // '1 item'
 * pluralize('item', 'items', 5); // '5 items'
 */
export function pluralize(singular: string, plural: string, count: number): string {
  if (typeof singular !== 'string' || typeof plural !== 'string') return '';
  if (typeof count !== 'number') return '';
  
  return `${count} ${count === 1 ? singular : plural}`;
}

/**
 * Options for string masking
 */
export interface MaskStringOptions {
  showFirst?: boolean;
  maskChar?: string;
}

/**
 * Masks a string with * except for visible characters
 * @param {string} str - The input string
 * @param {number} visibleChars - Number of characters to leave visible
 * @param {MaskStringOptions} [options] - Masking options
 * @returns {string} The masked string
 * @example
 * maskString('1234567890', 4); // '1234******'
 * maskString('1234567890', 4, { showFirst: false }); // '******7890'
 */
export function maskString(str: string, visibleChars: number, options: MaskStringOptions = {}): string {
  if (typeof str !== 'string') return '';
  if (typeof visibleChars !== 'number' || visibleChars < 0) return str;
  
  const defaultOptions: MaskStringOptions = {
    showFirst: true,
    maskChar: '*'
  };
  
  const config = { ...defaultOptions, ...options };
  
  if (str.length <= visibleChars) return str;
  
  const maskLength = str.length - visibleChars;
  const mask = config.maskChar!.repeat(maskLength);
  
  if (config.showFirst) {
    return str.substring(0, visibleChars) + mask;
  } else {
    return mask + str.substring(str.length - visibleChars);
  }
} 