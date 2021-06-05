# Node Typescript Test Driven Development Lessons

## Introduction
Before we dive deep into Test Driven Development (TDD) concepts. Let's look at some of the basics of JEST test framework we are going to use throughout the course.

### Test Structure
* JEST Tests follow a basic BDD pattern where tests can be structured into multiple ```describe()``` and ``` test()``` methods. 

* You can nest ```describe()``` and ```test()``` functions to create a feature/scenario structure that we commonly see in BDD frameworks.

* Use ```beforeAll()``` and ```afterAll()``` methods to execute setup code for all the tests/scenarios under a given test block. Please note that these methods will only run once for a given test suite.

* Use ```beforeEach()``` and ```afterEach()``` methods to execute code before and after each test in the test suite. 

### Test Execution
* ```npm test``` can be use to execute all the tests in the application.

* Examine ```package.json``` to see how the ```test``` script is setup.
    - ``` --runInBand```  - Ensure test run in sequence that they are defined. This is important when one test is dependent on completion of the others.
    - ```--config``` - Allows to define a jestconfig.json file as the main configuration file that governs the test execution.
    - ```jestconfig.json``` file contains patterns on how to identify a jest test in the application. In our case the following rules are applied.
        - All tests has to be denied in ```__tests__``` folder.
        - They should contains the words ```spec``` or ```test``` in the file name.
        - They should be one of the following files: ```.js, .ts, .tsx, .jsx```

* ```npm test index.test``` will only execute tests that match the pattern ```index.test```. This is useful when you only want to run a single test file.

* ```npm test -- --watch``` will start watching the files and any change to any of the test files will trigger a test execution. This is really great to have when you are developing. 