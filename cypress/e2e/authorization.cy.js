describe('Проверяю успешную авторизацию', function () {
    
    it('Успешная авторизация', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })

 describe('Проверка логики восстановления пароля', function () {
    
    it('Смена пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('osen-555@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })

 describe('Проверяю неуспешную авторизацию', function () {
    
    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio23'); 
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })
 describe('Проверяю неуспешную авторизацию', function () {
    
    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germannnnnnn@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })

 describe('Проверяю неуспешную авторизацию', function () {
    
    it('Почта без @', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })

 
 describe('Проверяю табуляцию', function () {
    
    it('Строчные буквы', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type(' GerMan@Dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })