# End to End Testing with Cypress

## Theory

### What is End to End Testing?

End to End Testing is a methodology used to test whether the flow of an application is performing as designed from start to finish. The purpose of carrying out end-to-end tests is to identify system dependencies and to ensure that the right information is passed between various system components and systems.

### What is Cypress?

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

### Why Cypress?

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

### Cypress vs Selenium

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

Selenium is a browser automation tool that requires Selenium Server to be setup to automate web applications. Cypress is a developer centric tool built for developers by developers. Cypress was designed to address the pain points developers and QA engineers face when testing modern applications.

### Practical

#### Installation

- `npm install cypress --save-dev` - is used to install Cypress as a dev dependency

#### Folder Structure

- `cypress` - is the folder where all of the Cypress files are stored
- `cypress.json` - is the configuration file for Cypress
- `fixtures` - is the folder where all of the fixtures are stored
- `integration` - is the folder where all of the integration tests are stored
- `plugins` - is the folder where all of the plugins are stored
- `support` - is the folder where all of the support files are stored

#### Cypress Commands

- `npx cypress open` - is used to open the Cypress Test Runner
- `npx cypress run` - is used to run Cypress tests to completion
- `npx cypress run --spec "cypress/integration/examples/actions.spec.js"` - is used to run a specific Cypress test to completion

#### Cypress Test Runner

- `Run All Tests` - is used to run all of the tests

#### Contains Keywords and Systems

- Contains Keywords and Systems are used to select DOM elements

    ```jsx
    cy.contains('Hello World')
    cy.get('main')
    ```

#### Get vs Find

- `get` - is used to look up a DOM element by selector

    ```jsx
    cy.get('main').get('h1').get('p')
    ```

- `find` - is used to find a DOM element within a specific DOM element

    ```jsx
    cy.get('main').find('h1').find('p')
    ```

#### Simulating User Actions

- `Click` - is used to simulate a user clicking on a DOM element

    ```jsx
    cy.get('button').click()
    ```

- `Type` - is used to simulate a user typing into a DOM element

    ```jsx
    cy.get('input').type('Hello World')
    ```

- `Check` - is used to simulate a user checking a checkbox element

    ```jsx
    cy.get('input[type="checkbox"]').check()
    ```

- `Select` - is used to simulate a user selecting an option from a select element

    ```jsx
    cy.get('select').select('option')
    ```

- `Trigger` - is used to simulate a user triggering an event on a DOM element

    ```jsx
    cy.get('button').trigger('mouseover')
    ```

#### Assertions

- `should` - is used to assert that a DOM element has a specific value

    ```jsx
    cy.get('input').should('have.value', 'Hello World')
    ```## to stcyp
    
- `expect` - is used to assert that a value is equal to another value

    ```jsx
    expect('Hello World').to.equal('Hello World')
    ```

- Example: login form, after login credential failed, the error message should be shown

    ```jsx
    cy.get('[data-cy="error"]').should('be.visible')
    cy.get('[data-cy="error"]').should('contain', 'Login failed')
    ```

#### Aliases

- `as` - is used to create an alias for a DOM element

    ```jsx
    cy.get('input').as('input')
    ```

- `@` - is used to reference an alias

    ```jsx
    cy.get('@input').should('have.value', 'Hello World')
    ```

#### Data Attributes

- `data-cy` - is used to create a data attribute for a DOM element

    ```jsx
    <button data-cy="button">Click Me</button>
    ```

- `cy.get('[data-cy="button"]')` - is used to select a DOM element by data attribute

    ```jsx
    cy.get('[data-cy="button"]').click()
    ```

#### Testing Page Navigation

- `cy.visit` - is used to visit a specific URL

    ```jsx
    cy.visit('https://example.cypress.io')
    ```

- `cy.url` - is used to assert that the URL is correct

    ```jsx
    cy.url().should('include', '/commands/actions')
    ```

- `cy.go` - is used to go back or forward in the browser's history

    ```jsx
    cy.go('back')
    cy.go('forward')
    ```