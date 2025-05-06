/**
 * String Utility Library
 * A comprehensive collection of string manipulation utilities
 */

// Re-export all functions from the main module
// This allows importing from the root of the package

export {
    // Case manipulation
    capitalize,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    titleCase,
    
    // Text transformation
    truncate,
    ellipsis,
    reverse,
    slugify,
    stripHTML,
    stripPunctuation,
    
    // Text analysis
    countWords,
    countOccurrences,
    isEmail,
    isURL,
    containsSubstring,
    hasEmoji,
    
    // String generation
    randomString,
    pluralize,
    maskString
  } from './stringUtils';
  
  // Also export as default
  import * as stringUtils from './stringUtils';
  export default stringUtils;