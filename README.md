
# Parentheses Code Checker with Nodejs

App checks to validate the parentheses of a LISP code (or any code). It checks to determine if an equal number of opening and closing parentheses have been used in the code. Processing the check validates all parentheses including nested or not.

## Run Code Check by Using Jest Node Module

Code needs to be read as strings of text using one of two methods:

* Hardcoded 'string'

* Text file containing LISP code that can be imported into the app

### How to run the application

The code has two existing files that can being tested, along with several hard-coded strings.

The files are `code.lisp.txt` and `code.lisp2.txt`.  See "How to run your own code file" for more usage options.

The app will check code that is either hard-coded, or imported from a file.

See the file `app.test.js` for tests that can be run to check code files, or for an example of existing tests with hard-coded strings.

1. Requires you have Nodejs installed, version 8 and up should be fine.

1. From the project root, install node modules by running `npm install`

1. Run tests with **one** of the following commands

* `$ npm run test`

* `$ jest`

## How to run your own code file

1. Add your code to a .txt file and save it to the project root directory.

1. Open the file `app.test.js` and copy-paste an existing test, editing the file name to match your file name

1. From the project root directory, see above "How to run the application" for the commands to run the tests.
