import { 
  capitalize, 
  camelCase, 
  pascalCase, 
  snakeCase, 
  kebabCase, 
  titleCase, 
  truncate, 
  ellipsis, 
  reverse, 
  slugify, 
  stripHTML, 
  stripPunctuation, 
  countWords, 
  countOccurrences, 
  isEmail, 
  isURL, 
  containsSubstring, 
} from './dist';

console.log(capitalize('hello'));
console.log(camelCase('hello world'));
console.log(pascalCase('hello world my name is'));
console.log(snakeCase('hello world my name is'));
console.log(kebabCase('Hello wOrld My nAme Is'));
console.log(titleCase('hello world my name is'));
console.log(truncate('hello world my name is', 5));
console.log(ellipsis('hello world my name is', 5));
console.log(reverse('hello world my name is'));
console.log(slugify('hello world my name is'));
console.log(stripHTML('<p><strong>hello</strong> world <br> <em>my</em> name <a href="https://www.google.com">is</a></p>'));
console.log(stripPunctuation('hello, world my. name is!'));
console.log(countWords('hello world my name is'));
console.log(countOccurrences('hello world my name is', 'hello'));
console.log(isEmail('hello@world.com'));
console.log(isURL('https://www.google.com'));
console.log(containsSubstring('hello world my name is', 'hello')); 