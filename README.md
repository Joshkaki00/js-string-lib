# String Utils Library

A comprehensive JavaScript utility library for string manipulation, providing a wide range of functions for text transformation, analysis, and generation.

## Installation

```bash
npm i string-utils-lib
```

You can also find the package on npm: [string-utils-lib](https://www.npmjs.com/package/string-utils-lib)

GitHub Repository: [js-string-lib](https://github.com/Joshkaki00/js-string-lib)

## Quick Start

### Basic Usage
```javascript
// Import the functions you need
import { capitalize, camelCase, snakeCase } from 'string-utils-lib';

// Use the functions
const text = 'hello world';
console.log(capitalize(text));    // Output: 'Hello world'
console.log(camelCase(text));     // Output: 'helloWorld'
console.log(snakeCase(text));     // Output: 'hello_world'
```

### Running in Node.js
1. Create a new file (e.g., `example.js`)
2. Add your code:
```javascript
const { capitalize, camelCase } = require('string-utils-lib');

const result = capitalize('hello world');
console.log(result); // Output: 'Hello world'
```
3. Run the file:
```bash
node example.js
```

### Running in Browser
1. Include the library in your HTML:
```html
<script src="node_modules/string-utils-lib/dist/index.js"></script>
```
2. Use the functions:
```javascript
const result = stringUtils.capitalize('hello world');
console.log(result); // Output: 'Hello world'
```

### Running in TypeScript
```typescript
import { capitalize, camelCase } from 'string-utils-lib';

const text: string = 'hello world';
const result: string = capitalize(text);
console.log(result); // Output: 'Hello world'
```

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup
1. Clone the repository:
```bash
git clone https://github.com/Joshkaki00/js-string-lib.git
cd js-string-lib
```

2. Install dependencies:
```bash
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Building
```bash
# Build the library
npm run build

# Build in watch mode
npm run build:watch
```

### Linting
```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

## Features

### Case Manipulation
- `capitalize(str)`: Capitalizes the first letter of a string
- `camelCase(str)`: Converts string to camelCase
- `pascalCase(str)`: Converts string to PascalCase
- `snakeCase(str)`: Converts string to snake_case
- `kebabCase(str)`: Converts string to kebab-case
- `titleCase(str)`: Converts string to Title Case

### Text Transformation
- `truncate(str, length, suffix)`: Truncates text to specified length with optional suffix
- `ellipsis(str, length)`: Truncates text with ellipsis if it exceeds length
- `reverse(str)`: Reverses a string
- `slugify(str)`: Converts string to URL-friendly slug
- `stripHTML(str)`: Removes HTML tags from string
- `stripPunctuation(str)`: Removes all punctuation from string

### Text Analysis
- `countWords(str)`: Counts words in a string
- `countOccurrences(str, substr)`: Counts occurrences of a substring
- `isEmail(str)`: Validates email addresses
- `isURL(str)`: Validates URLs
- `containsSubstring(str, substr, caseSensitive)`: Checks for substring presence
- `hasEmoji(str)`: Detects emoji presence in string

### String Generation
- `randomString(length, options)`: Generates random strings with customizable options
- `pluralize(singular, plural, count)`: Returns singular or plural form based on count
- `maskString(str, visibleChars, options)`: Masks string with customizable options

## Usage

```javascript
import { capitalize, camelCase, isEmail } from 'string-utils-lib';

// Case manipulation
capitalize('hello world'); // 'Hello world'
camelCase('hello-world'); // 'helloWorld'

// Text analysis
isEmail('test@example.com'); // true
```

## Examples

### Case Manipulation
```javascript
import { pascalCase, snakeCase, titleCase } from 'string-utils-lib';

pascalCase('hello world'); // 'HelloWorld'
snakeCase('helloWorld'); // 'hello_world'
titleCase('hello world'); // 'Hello World'
```

### Text Transformation
```javascript
import { truncate, slugify, stripHTML } from 'string-utils-lib';

truncate('Hello world', 5, '...'); // 'Hello...'
slugify('Hello World!'); // 'hello-world'
stripHTML('<p>Hello <b>world</b></p>'); // 'Hello world'
```

### String Generation
```javascript
import { randomString, maskString } from 'string-utils-lib';

// Generate random string
randomString(8, { uppercase: true, numbers: true }); // 'aB3cD4eF'

// Mask string
maskString('1234567890', 4); // '1234******'
maskString('1234567890', 4, { showFirst: false }); // '******7890'
```

## API Documentation

Each function is thoroughly documented with JSDoc comments, including:
- Parameter descriptions
- Return value descriptions
- Usage examples
- Edge case handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this library in your projects.