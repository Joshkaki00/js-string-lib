import {
  countWords,
  countOccurrences,
  isEmail,
  isURL,
  containsSubstring,
  hasEmoji
} from '../src/index';

describe('Text Analysis Functions', () => {
  describe('countWords', () => {
    test('counts words in a string', () => {
      expect(countWords('Hello world')).toBe(2);
      expect(countWords('This is a test string')).toBe(5);
    });

    test('handles strings with extra spaces', () => {
      expect(countWords('  Hello   world  ')).toBe(2);
      expect(countWords('Multiple   spaces   between words')).toBe(4);
    });

    test('handles empty string', () => {
      expect(countWords('')).toBe(0);
      expect(countWords('   ')).toBe(0);
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countWords(null)).toBe(0);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countWords(undefined)).toBe(0);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countWords(123)).toBe(0);
    });
  });

  describe('countOccurrences', () => {
    test('counts occurrences of a substring', () => {
      expect(countOccurrences('hello hello world', 'hello')).toBe(2);
      expect(countOccurrences('banana', 'na')).toBe(2);
      expect(countOccurrences('test string', 'not found')).toBe(0);
    });

    test('handles case-sensitive matches', () => {
      expect(countOccurrences('Hello hello HELLO', 'hello')).toBe(1);
      expect(countOccurrences('Test test TEST', 'Test')).toBe(1);
    });

    test('handles empty strings', () => {
      expect(countOccurrences('', 'test')).toBe(0);
      expect(countOccurrences('test', '')).toBe(0);
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countOccurrences(null, 'test')).toBe(0);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countOccurrences('test', null)).toBe(0);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countOccurrences(123, 'test')).toBe(0);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(countOccurrences('test', 123)).toBe(0);
    });
  });

  describe('isEmail', () => {
    test('identifies valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name+tag@domain.co.uk')).toBe(true);
      expect(isEmail('a@b.c')).toBe(true);
    });

    test('rejects invalid email addresses', () => {
      expect(isEmail('test')).toBe(false);
      expect(isEmail('test@')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
      expect(isEmail('test@example.')).toBe(false);
      expect(isEmail('test@exam ple.com')).toBe(false);
    });

    test('handles empty string', () => {
      expect(isEmail('')).toBe(false);
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isEmail(null)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isEmail(undefined)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isEmail(123)).toBe(false);
    });
  });

  describe('isURL', () => {
    test('identifies valid URLs', () => {
      expect(isURL('https://example.com')).toBe(true);
      expect(isURL('http://subdomain.example.co.uk/path?query=string')).toBe(true);
      expect(isURL('ftp://files.example.org')).toBe(true);
    });

    test('rejects invalid URLs', () => {
      expect(isURL('example.com')).toBe(false); // Missing protocol
      expect(isURL('https://')).toBe(false);
      expect(isURL('http://example')).toBe(true); // Valid according to URL constructor
      expect(isURL('not a url')).toBe(false);
    });

    test('handles empty string', () => {
      expect(isURL('')).toBe(false);
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isURL(null)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isURL(undefined)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(isURL(123)).toBe(false);
    });
  });

  describe('containsSubstring', () => {
    test('finds substrings with case sensitivity', () => {
      expect(containsSubstring('Hello World', 'World')).toBe(true);
      expect(containsSubstring('Hello World', 'world')).toBe(false);
    });

    test('finds substrings with case insensitivity', () => {
      expect(containsSubstring('Hello World', 'world', false)).toBe(true);
      expect(containsSubstring('Testing, testing', 'TESTING', false)).toBe(true);
    });

    test('handles empty strings', () => {
      expect(containsSubstring('', 'test')).toBe(false);
      expect(containsSubstring('test', '')).toBe(true); // Empty string is in every string
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(containsSubstring(null, 'test')).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(containsSubstring('test', null)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(containsSubstring(123, 'test')).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(containsSubstring('test', 123)).toBe(false);
    });
  });

  describe('hasEmoji', () => {
    test('detects emojis in strings', () => {
      expect(hasEmoji('Hello 😀')).toBe(true);
      expect(hasEmoji('🌍 Earth')).toBe(true);
      expect(hasEmoji('Multiple 🎉 emojis 🚀')).toBe(true);
    });

    test('returns false for strings without emojis', () => {
      expect(hasEmoji('Hello world')).toBe(false);
      expect(hasEmoji('No emojis here!')).toBe(false);
      expect(hasEmoji('Just :) symbols')).toBe(false); // Not a Unicode emoji
    });

    test('handles empty string', () => {
      expect(hasEmoji('')).toBe(false);
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(hasEmoji(null)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(hasEmoji(undefined)).toBe(false);
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(hasEmoji(123)).toBe(false);
    });
  });
}); 