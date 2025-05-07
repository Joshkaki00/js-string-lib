import { 
  capitalize, 
  camelCase, 
  pascalCase, 
  snakeCase, 
  kebabCase, 
  titleCase 
} from '../src/stringUtils';

describe('String Case Manipulation Functions', () => {
  // capitalize tests
  describe('capitalize', () => {
    test('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('hello world')).toBe('Hello world');
    });

    test('should return the original string if it is already capitalized', () => {
      expect(capitalize('Hello')).toBe('Hello');
      expect(capitalize('Hello world')).toBe('Hello world');
    });

    test('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(capitalize(null)).toBe(null);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(capitalize(undefined)).toBe(undefined);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(capitalize(123)).toBe(123);
    });
  });

  // camelCase tests
  describe('camelCase', () => {
    test('should convert space-separated strings to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('hello beautiful world')).toBe('helloBeautifulWorld');
    });

    test('should convert dash-separated strings to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('hello-beautiful-world')).toBe('helloBeautifulWorld');
    });

    test('should convert underscore_separated strings to camelCase', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
      expect(camelCase('hello_beautiful_world')).toBe('helloBeautifulWorld');
    });

    test('should convert PascalCase to camelCase', () => {
      expect(camelCase('HelloWorld')).toBe('helloWorld');
    });

    test('should handle empty strings', () => {
      expect(camelCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(camelCase(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(camelCase(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(camelCase(123)).toBe('');
    });
  });

  // pascalCase tests
  describe('pascalCase', () => {
    test('should convert space-separated strings to PascalCase', () => {
      expect(pascalCase('hello world')).toBe('HelloWorld');
      expect(pascalCase('hello beautiful world')).toBe('HelloBeautifulWorld');
    });

    test('should convert dash-separated strings to PascalCase', () => {
      expect(pascalCase('hello-world')).toBe('HelloWorld');
      expect(pascalCase('hello-beautiful-world')).toBe('HelloBeautifulWorld');
    });

    test('should convert underscore_separated strings to PascalCase', () => {
      expect(pascalCase('hello_world')).toBe('HelloWorld');
      expect(pascalCase('hello_beautiful_world')).toBe('HelloBeautifulWorld');
    });

    test('should maintain PascalCase if already in that format', () => {
      expect(pascalCase('HelloWorld')).toBe('HelloWorld');
    });

    test('should handle empty strings', () => {
      expect(pascalCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pascalCase(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pascalCase(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pascalCase(123)).toBe('');
    });
  });

  // snakeCase tests
  describe('snakeCase', () => {
    test('should convert space-separated strings to snake_case', () => {
      expect(snakeCase('hello world')).toBe('hello_world');
      expect(snakeCase('hello beautiful world')).toBe('hello_beautiful_world');
    });

    test('should convert dash-separated strings to snake_case', () => {
      expect(snakeCase('hello-world')).toBe('hello_world');
      expect(snakeCase('hello-beautiful-world')).toBe('hello_beautiful_world');
    });

    test('should convert camelCase strings to snake_case', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('helloBeautifulWorld')).toBe('hello_beautiful_world');
    });

    test('should convert PascalCase strings to snake_case', () => {
      expect(snakeCase('HelloWorld')).toBe('hello_world');
      expect(snakeCase('HelloBeautifulWorld')).toBe('hello_beautiful_world');
    });

    test('should handle empty strings', () => {
      expect(snakeCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(snakeCase(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(snakeCase(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(snakeCase(123)).toBe('');
    });
  });

  // kebabCase tests
  describe('kebabCase', () => {
    test('should convert space-separated strings to kebab-case', () => {
      expect(kebabCase('hello world')).toBe('hello-world');
      expect(kebabCase('hello beautiful world')).toBe('hello-beautiful-world');
    });

    test('should maintain kebab-case if already in that format', () => {
      expect(kebabCase('hello-world')).toBe('hello-world');
    });

    test('should convert camelCase strings to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('helloBeautifulWorld')).toBe('hello-beautiful-world');
    });

    test('should convert PascalCase strings to kebab-case', () => {
      expect(kebabCase('HelloWorld')).toBe('hello-world');
      expect(kebabCase('HelloBeautifulWorld')).toBe('hello-beautiful-world');
    });

    test('should handle empty strings', () => {
      expect(kebabCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(kebabCase(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(kebabCase(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(kebabCase(123)).toBe('');
    });
  });

  // titleCase tests
  describe('titleCase', () => {
    test('should convert strings to Title Case', () => {
      expect(titleCase('hello world')).toBe('Hello World');
      expect(titleCase('hello beautiful world')).toBe('Hello Beautiful World');
    });

    test('should not capitalize certain small words in the middle of the string', () => {
      expect(titleCase('the quick brown fox jumps over the lazy dog')).toBe('The Quick Brown Fox Jumps over the Lazy Dog');
      expect(titleCase('music by the beatles')).toBe('Music by the Beatles');
    });

    test('should always capitalize the first and last words', () => {
      expect(titleCase('the end')).toBe('The End');
      expect(titleCase('in the beginning')).toBe('In the Beginning');
    });

    test('should handle empty strings', () => {
      expect(titleCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(titleCase(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(titleCase(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(titleCase(123)).toBe('');
    });
  });
}); 