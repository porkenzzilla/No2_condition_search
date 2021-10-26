## How it works?

This is a console program for finding data on specified conditions.

At first you must have a readline-sync library installed, you also need to run the commands: `chmod +x bin/conditionSearch.js` and `sudo npm link`.
Your data in json format must be processed by JSON.stringify() method.
Example: const data = JSON.stringify( {"data": [
          {"name": "John", "email": "john2@mail.com", "age": 32},
          {"name": "John", "email": "john1@mail.com", "age": 12},
          {"name": "Jane", "email": "jane@mail.com", "age": 25}
]}
);

Example: const condition = JSON.stringify( {"condition": {
          "include": [{"name": "John"}], 
          "exclude": [{"disabled": true}],
          "sort_by": ["age"]
}}
);

Run the `condition-search` command in your console and follow the instructions.
 
1)In the first line you write the data. 
Example: {"data":[{"name":"John","email":"john2@mail.com","disabled":true},{"name":"John","email":"john1@mail.com","disabled":false},{"name":"Jane","email":"jane@mail.com","disabled":false}]}

2)In the second line you write the conditions that will be used to find the data you need. There are three conditions(include, exclude, sort_by) you can set in any order. 
Example: {"condition":{"exclude":[{"disabled":true}],"include":[{"name":"John"}]}}

3)In the next lines you get the result under the given conditions. 
Example: {
  result: [ { name: 'John', email: 'john1@mail.com', disabled: false } ]
}
