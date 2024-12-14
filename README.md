# json-key-rename package

json-key-rename is a lightweight utility that simplifies the process of renaming keys in JavaScript objects(JSON). Whether you're working with flat or deeply nested objects, this package allows you to easily transform keys based on a given mapping. It’s perfect for scenarios such as:

Data normalization: Rename API response keys to match your application's expected format.
Consistency: Ensure consistent naming conventions across different data sources.
Refactoring: Cleanly refactor your codebase by renaming object keys without manually editing every instance.

## Installation

To install this package, use npm:

```bash
npm install your-package-name
```



Installation

Here's how you can use this package to rename keys in a nested object:

const yourPackage = require('json-key-rename');


const sampleData = {
  firstName: 'Alice',
  lastName: 'Smith',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    postalCode: '12345',
  },
  students: [
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      grades: {
        math: 'A',
        physics: 'B',
      },
    },
    {
      firstName: 'Charlie',
      lastName: 'Brown',
      grades: {
        math: 'C',
        physics: 'A',
      },
    },
  ],
};

// Define the key mapping for renaming
const keyMap = {
  firstName: 'givenName',
  lastName: 'surname',
  street: 'streetAddress',
  city: 'cityName',
  postalCode: 'zipcode',
};

// Use your package to rename keys
const renamedData = yourPackage.renameKeys(sampleData, keyMap);
console.log(renamedData);
Output:

{
  givenName: 'Alice',
  surname: 'Smith',
  address: {
    streetAddress: '123 Main St',
    cityName: 'Anytown',
    zipcode: '12345',
  },
  students: [
    {
      givenName: 'Bob',
      surname: 'Johnson',
      grades: {
        math: 'A',
        physics: 'B',
      },
    },
    {
      givenName: 'Charlie',
      surname: 'Brown',
      grades: {
        math: 'C',
        physics: 'A',
      },
    },
  ],
}

API

renameKeys(object, keyMapping)

Parameters:
object (Object): The object whose keys will be renamed.
keyMapping (Object): An object where keys are the old keys and values are the new keys.
Returns: A new object with renamed keys.

Example:
const renamedObject = yourPackage.renameKeys(
  { a: 1, b: 2 },
  { a: 'x', b: 'y' }
);
console.log(renamedObject); // { x: 1, y: 2 }
