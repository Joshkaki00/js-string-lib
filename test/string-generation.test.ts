import {
  randomString,
  pluralize,
  maskString,
  RandomStringOptions,
  MaskStringOptions
} from '../src/index';

describe('String Generation Functions', () => {
  describe('randomString', () => {
    test('generates a string of specified length', () => {
      const result = randomString(10);
      expect(result.length).toBe(10);

      const result2 = randomString(5);
      expect(result2.length).toBe(5);
    });

    test('includes specified characters based on options', () => {
      // Only lowercase
      const lowerOnlyOptions: RandomStringOptions = { 
        lowercase: true, 
        uppercase: false, 
        numbers: false, 
        symbols: false 
      };
      const lowerOnly = randomString(20, lowerOnlyOptions);
      expect(lowerOnly).toMatch(/^[a-z]+$/);

      // Only uppercase
      const upperOnlyOptions: RandomStringOptions = { 
        lowercase: false, 
        uppercase: true, 
        numbers: false, 
        symbols: false 
      };
      const upperOnly = randomString(20, upperOnlyOptions);
      expect(upperOnly).toMatch(/^[A-Z]+$/);

      // Only numbers
      const numbersOnlyOptions: RandomStringOptions = { 
        lowercase: false, 
        uppercase: false, 
        numbers: true, 
        symbols: false 
      };
      const numbersOnly = randomString(20, numbersOnlyOptions);
      expect(numbersOnly).toMatch(/^[0-9]+$/);

      // Only symbols
      const symbolsOnlyOptions: RandomStringOptions = { 
        lowercase: false, 
        uppercase: false, 
        numbers: false, 
        symbols: true 
      };
      const symbolsOnly = randomString(20, symbolsOnlyOptions);
      expect(symbolsOnly).toMatch(/^[!@#$%^&*()_+\-=[\]{}|;:,.<>?]+$/);
    });

    test('handles invalid options', () => {
      // No character sets selected
      const noCharsOptions: RandomStringOptions = { 
        lowercase: false, 
        uppercase: false, 
        numbers: false, 
        symbols: false 
      };
      expect(randomString(10, noCharsOptions)).toBe('');
    });

    test('handles invalid length', () => {
      expect(randomString(0)).toBe('');
      expect(randomString(-5)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(randomString('not a number')).toBe('');
    });

    test('generates different strings on each call', () => {
      const result1 = randomString(20);
      const result2 = randomString(20);
      expect(result1).not.toBe(result2);
    });
  });

  describe('pluralize', () => {
    test('returns singular form for count of 1', () => {
      expect(pluralize('item', 'items', 1)).toBe('1 item');
      expect(pluralize('box', 'boxes', 1)).toBe('1 box');
    });

    test('returns plural form for counts other than 1', () => {
      expect(pluralize('item', 'items', 0)).toBe('0 items');
      expect(pluralize('item', 'items', 2)).toBe('2 items');
      expect(pluralize('box', 'boxes', 5)).toBe('5 boxes');
    });

    test('handles negative numbers', () => {
      expect(pluralize('item', 'items', -1)).toBe('-1 items');
    });

    test('handles non-integer counts', () => {
      expect(pluralize('item', 'items', 1.5)).toBe('1.5 items');
    });

    test('handles invalid inputs', () => {
      expect(pluralize('', '', 1)).toBe('1 ');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pluralize(null, 'items', 1)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pluralize('item', null, 1)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pluralize('item', 'items', null)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(pluralize('item', 'items', 'not a number')).toBe('');
    });
  });

  describe('maskString', () => {
    test('masks characters after visibleChars when showFirst is true', () => {
      expect(maskString('1234567890', 4)).toBe('1234******');
      expect(maskString('password', 2)).toBe('pa******');
    });

    test('masks characters before visibleChars when showFirst is false', () => {
      const options1: MaskStringOptions = { showFirst: false };
      expect(maskString('1234567890', 4, options1)).toBe('******7890');
      
      const options2: MaskStringOptions = { showFirst: false };
      expect(maskString('password', 2, options2)).toBe('******rd');
    });

    test('uses custom mask character', () => {
      const options1: MaskStringOptions = { maskChar: '#' };
      expect(maskString('1234567890', 4, options1)).toBe('1234######');
      
      const options2: MaskStringOptions = { showFirst: false, maskChar: 'x' };
      expect(maskString('password', 2, options2)).toBe('xxxxxxrd');
    });

    test('returns full string when visibleChars >= string length', () => {
      expect(maskString('1234', 4)).toBe('1234');
      expect(maskString('1234', 5)).toBe('1234');
    });

    test('handles empty strings', () => {
      expect(maskString('', 4)).toBe('');
    });

    test('handles invalid inputs', () => {
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(maskString(null, 4)).toBe('');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(maskString('1234', null)).toBe('1234');
      expect(maskString('1234', -1)).toBe('1234');
      // @ts-ignore - Testing runtime behavior with invalid input
      expect(maskString('1234', 'not a number')).toBe('1234');
    });
  });
}); 