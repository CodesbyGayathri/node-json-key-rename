const {renameJsonKeys} = require('./dist/index');

const obj = [{
    "firstName": "John",
    "lastName": "Doe",
    "contactInfo": {
      "email": "john.doe@example.com",
      "phone": {
        "mobile": "123-456-7890",
        "work": "987-654-3210"
      },
      "address": {
        "street": "123 Main St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "12345"
      }
    },
    "professor": {
      "firstName": "Jane",
      "lastName": "Smith",
      "subjects": [
        "Mathematics",
        "Physics"
      ],
      "contactInfo": {
        "email": "jane.smith@university.com",
        "phone": {
          "mobile": "321-654-9870",
          "work": "654-321-0987"
        }
      }
    },
    "students": [
      {
        "firstName": "Alice",
        "lastName": "Johnson",
        "grades": {
          "math": "A",
          "physics": "B"
        }
      },
      {
        "firstName": "Bob",
        "lastName": "Brown",
        "grades": {
          "math": "C",
          "physics": "B"
        }
      }
    ]
  }];
  
  const keyMap = {
    "firstName": "name",
    "lastName": "surname",
    "contactInfo": "contact",
    "email": "emailAddress",
    "phone": "phones",
    "street": "addressLine1",
    "city": "town",
    "state": "province",
    "zip": "postalCode",
    "professor": "teacher",
    "subjects": "courses",
    "students": "enrolledStudents",
    "grades": "scores",
    "mobile": "cellPhone",
    "work": "officePhone",
    "math": "dummy"
  };


console.log(obj);
console.log(renameJsonKeys(obj, keyMap));
