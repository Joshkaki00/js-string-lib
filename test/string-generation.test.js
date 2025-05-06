import {
    randomString,
    pluralize,
    maskString
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
        const lowerOnly = randomString(20, { 
          lowercase: true, 
          uppercase: false, 
          numbers: false, 
          symbols: false 
        });
        expect(lowerOnly).toMatch(/^[a-z]+$/);
  
        // Only uppercase
        const upperOnly = randomString(20, { 
          lowercase: false, 
          uppercase: true, 
          numbers: false, 
          symbols: false 
        });
        expect(upperOnly).toMatch(/^[A-Z]+$/);
  
        // Only numbers
        const numbersOnly = randomString(20, { 
          lowercase: false, 
          uppercase: false, 
          numbers: true, 
          symbols: false 
        });
        expect(numbersOnly).toMatch(/^[0-9]+$/);
  
        // Only symbols
        const symbolsOnly = randomString(20, { 
          lowercase: false, 
          uppercase: false, 
          numbers: false, 
          symbols: true 
        });
        expect(symbolsOnly).toMatch(/^[!@#$%^&*()_+\-=[\]{}|;:,.<>?]+$/);
      });
  
      test('handles invalid options', () => {
        // No character sets selected
        expect(randomString(10, { 
          lowercase: false, 
          uppercase: false, 
          numbers: false, 
          symbols: false 
        })).toBe('');
      });
  
      test('handles invalid length', () => {
        expect(randomString(0)).toBe('');
        expect(randomString(-5)).toBe('');
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
        expect(pluralize(null, 'items', 1)).toBe('');
        expect(pluralize('item', null, 1)).toBe('');
        expect(pluralize('item', 'items', null)).toBe('');
        expect(pluralize('item', 'items', 'not a number')).toBe('');
      });
    });
  
    describe('maskString', () => {
      test('masks characters after visibleChars when showFirst is true', () => {
        expect(maskString('1234567890', 4)).toBe('1234******');
        expect(maskString('password', 2)).toBe('pa******');
      });
  
      test('masks characters before visibleChars when showFirst is false', () => {
        expect(maskString('1234567890', 4, { showFirst: false })).toBe('******7890');
        expect(maskString('password', 2, { showFirst: false })).toBe('******rd');
      });
  
      test('uses custom mask character', () => {
        expect(maskString('1234567890', 4, { maskChar: '#' })).toBe('1234######');
        expect(maskString('password', 2, { showFirst: false, maskChar: 'x' })).toBe('xxxxxxrd');
      });
  
      test('returns full string when visibleChars >= string length', () => {
        expect(maskString('1234', 4)).toBe('1234');
        expect(maskString('1234', 5)).toBe('1234');
      });
  
      test('handles empty strings', () => {
        expect(maskString('', 4)).toBe('');
      });
  
      test('handles invalid inputs', () => {
        expect(maskString(null, 4)).toBe('');
        expect(maskString('1234', null)).toBe('1234');
        expect(maskString('1234', -1)).toBe('1234');
        expect(maskString('1234', 'not a number')).toBe('1234');
      });
    });
  });