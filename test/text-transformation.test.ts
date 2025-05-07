import {
  truncate,
  ellipsis,
  reverse,
  slugify,
  stripHTML,
  stripPunctuation
} from '../src/index';

describe('Text Transformation Functions', () => {
  describe('truncate', () => {
    test('truncates text to specified length', () => {
      expect(truncate('Hello world', 5)).toBe('Hello');
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    test('adds suffix when truncated', () => {
      expect(truncate('Hello world', 5, '...')).toBe('Hello...');
    });

    test('handles empty string', () => {
      expect(truncate('', 5)).toBe('');
      expect(truncate('', 5, '...')).toBe('');
    });

    test('handles invalid length', () => {
      expect(truncate('Hello', -1)).toBe('Hello');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(truncate('Hello', 'not a number')).toBe('Hello');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(truncate(null, 5)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(truncate(undefined, 5)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(truncate(123, 5)).toBe('');
    });
  });

  describe('ellipsis', () => {
    test('adds ellipsis if text exceeds length', () => {
      expect(ellipsis('Hello world', 8)).toBe('Hello...');
      expect(ellipsis('Hello', 8)).toBe('Hello');
    });

    test('preserves at least one character before ellipsis', () => {
      expect(ellipsis('Hello', 3)).toBe('H...');
      expect(ellipsis('Hello', 4)).toBe('H...');
    });

    test('handles empty string', () => {
      expect(ellipsis('', 5)).toBe('');
    });

    test('handles invalid length', () => {
      expect(ellipsis('Hello', 2)).toBe('Hello');
      expect(ellipsis('Hello', -1)).toBe('Hello');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(ellipsis(null, 5)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(ellipsis(undefined, 5)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(ellipsis(123, 5)).toBe('');
    });
  });

  describe('reverse', () => {
    test('reverses a string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('Hello World')).toBe('dlroW olleH');
    });

    test('handles empty string', () => {
      expect(reverse('')).toBe('');
    });

    test('handles palindromes', () => {
      expect(reverse('level')).toBe('level');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(reverse(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(reverse(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(reverse(123)).toBe('');
    });
  });

  describe('slugify', () => {
    test('converts string to slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Hello  World')).toBe('hello-world');
    });

    test('removes special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world');
      expect(slugify('Hello & World')).toBe('hello-world');
    });

    test('handles multiple spaces and hyphens', () => {
      expect(slugify('Hello   World')).toBe('hello-world');
      expect(slugify('Hello---World')).toBe('hello-world');
    });

    test('removes leading and trailing hyphens', () => {
      expect(slugify('-Hello World-')).toBe('hello-world');
    });

    test('handles empty string', () => {
      expect(slugify('')).toBe('');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(slugify(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(slugify(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(slugify(123)).toBe('');
    });
  });

  describe('stripHTML', () => {
    test('removes HTML tags', () => {
      expect(stripHTML('<p>Hello</p>')).toBe('Hello');
      expect(stripHTML('<p>Hello <b>World</b></p>')).toBe('Hello World');
    });

    test('handles complex HTML', () => {
      expect(stripHTML('<div class="test"><p>Hello</p><p>World</p></div>')).toBe('HelloWorld');
    });

    test('handles self-closing tags', () => {
      expect(stripHTML('Hello<br/>World')).toBe('HelloWorld');
      expect(stripHTML('Hello<img src="test.jpg" />World')).toBe('HelloWorld');
    });

    test('handles empty string', () => {
      expect(stripHTML('')).toBe('');
    });

    test('handles strings without HTML', () => {
      expect(stripHTML('Hello World')).toBe('Hello World');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripHTML(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripHTML(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripHTML(123)).toBe('');
    });
  });

  describe('stripPunctuation', () => {
    test('removes punctuation', () => {
      expect(stripPunctuation('Hello, World!')).toBe('Hello World');
      expect(stripPunctuation('Hello. How are you?')).toBe('Hello How are you');
    });

    test('handles strings with multiple punctuation', () => {
      expect(stripPunctuation('Hello!!! How are you???')).toBe('Hello How are you');
    });

    test('handles empty string', () => {
      expect(stripPunctuation('')).toBe('');
    });

    test('handles strings without punctuation', () => {
      expect(stripPunctuation('Hello World')).toBe('Hello World');
    });

    test('handles non-string inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripPunctuation(null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripPunctuation(undefined)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(stripPunctuation(123)).toBe('');
    });
  });
}); 