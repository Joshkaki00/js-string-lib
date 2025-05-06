import {
    capitalize,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    titleCase
  } from '../src/index';
  
  describe('Case Manipulation Functions', () => {
    describe('capitalize', () => {
      test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('hello world')).toBe('Hello world');
      });
  
      test('returns empty string as is', () => {
        expect(capitalize('')).toBe('');
      });
  
      test('handles already capitalized strings', () => {
        expect(capitalize('Hello')).toBe('Hello');
      });
  
      test('handles non-string inputs', () => {
        expect(capitalize(null)).toBe(null);
        expect(capitalize(undefined)).toBe(undefined);
        expect(capitalize(123)).toBe(123);
      });
    });
  
    describe('camelCase', () => {
      test('converts space-separated strings to camelCase', () => {
        expect(camelCase('hello world')).toBe('helloWorld');
      });
  
      test('converts kebab-case to camelCase', () => {
        expect(camelCase('hello-world')).toBe('helloWorld');
      });
  
      test('converts snake_case to camelCase', () => {
        expect(camelCase('hello_world')).toBe('helloWorld');
      });
  
      test('converts PascalCase to camelCase', () => {
        expect(camelCase('HelloWorld')).toBe('helloWorld');
      });
  
      test('handles empty strings', () => {
        expect(camelCase('')).toBe('');
      });
  
      test('handles non-string inputs', () => {
        expect(camelCase(null)).toBe('');
        expect(camelCase(undefined)).toBe('');
        expect(camelCase(123)).toBe('');
      });
    });
  
    describe('pascalCase', () => {
      test('converts space-separated strings to PascalCase', () => {
        expect(pascalCase('hello world')).toBe('HelloWorld');
      });
  
      test('converts kebab-case to PascalCase', () => {
        expect(pascalCase('hello-world')).toBe('HelloWorld');
      });
  
      test('converts snake_case to PascalCase', () => {
        expect(pascalCase('hello_world')).toBe('HelloWorld');
      });
  
      test('converts camelCase to PascalCase', () => {
        expect(pascalCase('helloWorld')).toBe('HelloWorld');
      });
  
      test('handles empty strings', () => {
        expect(pascalCase('')).toBe('');
      });
  
      test('handles non-string inputs', () => {
        expect(pascalCase(null)).toBe('');
        expect(pascalCase(undefined)).toBe('');
        expect(pascalCase(123)).toBe('');
      });
    });
  
    describe('snakeCase', () => {
      test('converts space-separated strings to snake_case', () => {
        expect(snakeCase('hello world')).toBe('hello_world');
      });
  
      test('converts kebab-case to snake_case', () => {
        expect(snakeCase('hello-world')).toBe('hello_world');
      });
  
      test('converts camelCase to snake_case', () => {
        expect(snakeCase('helloWorld')).toBe('hello_world');
      });
  
      test('converts PascalCase to snake_case', () => {
        expect(snakeCase('HelloWorld')).toBe('hello_world');
      });
  
      test('handles empty strings', () => {
        expect(snakeCase('')).toBe('');
      });
  
      test('handles non-string inputs', () => {
        expect(snakeCase(null)).toBe('');
        expect(snakeCase(undefined)).toBe('');
        expect(snakeCase(123)).toBe('');
      });
    });
  
    describe('kebabCase', () => {
      test('converts space-separated strings to kebab-case', () => {
        expect(kebabCase('hello world')).toBe('hello-world');
      });
  
      test('converts snake_case to kebab-case', () => {
        expect(kebabCase('hello_world')).toBe('hello-world');
      });
  
      test('converts camelCase to kebab-case', () => {
        expect(kebabCase('helloWorld')).toBe('hello-world');
      });
  
      test('converts PascalCase to kebab-case', () => {
        expect(kebabCase('HelloWorld')).toBe('hello-world');
      });
  
      test('handles empty strings', () => {
        expect(kebabCase('')).toBe('');
      });
  
      test('handles non-string inputs', () => {
        expect(kebabCase(null)).toBe('');
        expect(kebabCase(undefined)).toBe('');
        expect(kebabCase(123)).toBe('');
      });
    });
  
    describe('titleCase', () => {
      test('converts simple strings to Title Case', () => {
        expect(titleCase('hello world')).toBe('Hello World');
      });
  
      test('handles various case inputs', () => {
        expect(titleCase('HELLO WORLD')).toBe('Hello World');
        expect(titleCase('hello-world')).toBe('Hello-world');
        expect(titleCase('helloWorld')).toBe('Helloworld');
      });
  
      test('applies title case rules for small words', () => {
        expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
        expect(titleCase('a tale of two cities')).toBe('A Tale of Two Cities');
      });
  
      test('handles empty strings', () => {
        expect(titleCase('')).toBe('');
      });
  
      test('handles non-string inputs', () => {
        expect(titleCase(null)).toBe('');
        expect(titleCase(undefined)).toBe('');
        expect(titleCase(123)).toBe('');
      });
    });
  });