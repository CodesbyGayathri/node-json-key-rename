# json-key-rename package

json-key-rename is a lightweight utility that simplifies the process of renaming keys in JavaScript objects(JSON). Whether you're working with flat or deeply nested objects, this package allows you to easily transform keys based on a given mapping. It’s perfect for scenarios such as:

Data normalization: Rename API response keys to match your application's expected format.
Consistency: Ensure consistent naming conventions across different data sources.
Refactoring: Cleanly refactor your codebase by renaming object keys without manually editing every instance.

## Installation

To install this package, use npm:

```bash
npm install json-key-rename
```


### Installation

Here's how you can use this package to rename keys in JSON:

```bash
const renameJsonKeys = require('json-key-rename');

const jsonData = {
  firstName: 'Alice',
  lastName: 'Smith',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    postalCode: '12345',
  }
};

// Define the new key values for the keys to be renamed
const newKeys = {
  firstName: 'givenName',
  lastName: 'surname',
  street: 'streetAddress',
  city: 'cityName',
  postalCode: 'zipcode',
};

const renamedData = renameJsonKeys(jsonData, newKeys);
console.log(renamedData);
```
Output:
```bash

{
  givenName: 'Alice',
  surname: 'Smith',
  address: {
    streetAddress: '123 Main St',
    cityName: 'Anytown',
    zipcode: '12345',
  }
}
```
## For Frameworks like Angular

```bash
import {renameJsonKeys} from 'json-key-rename';
```

```bash
const jsonData = { a: 1, b: 2 };
const newKeys = { a: 'x', b: 'y' };

const renamedJson = renameJsonKeys(jsonData, newKeys);

console.log('Renamed Object:', renamedJson);
```




