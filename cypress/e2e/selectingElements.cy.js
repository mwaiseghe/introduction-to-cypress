/// <reference types="Cypress"/>

describe('selects elemets', ()=>{
    it('selects by attribute', ()=>{
        cy.visit('http://127.0.0.1:5500/');
        cy.get('img')
    })

    it('selects elements by class', ()=>{
        cy.visit('http://127.0.0.1:5500/');
        cy.get('.jointeam')
    })

    it('selects elements by id', ()=>{
        cy.visit('http://127.0.0.1:5500/');
        cy.get('#awards')
    })

    it('selects elements by parent element', ()=>{
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.get('form input')
    })

    it('selects elements by type', ()=>{
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.get('[type="password"]')
    })
})