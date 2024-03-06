
describe('Покупка аватара', function () {
    
    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/'); 
        cy.get(':nth-child(1) > .auth__input').type('osen-125@yandex.ru');
        cy.get('#password').type('ваш пароль');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(12) > .shop__button').click();
        //cy.get(':nth-child(8) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Miss Marple').type('{enter}');
        //cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
       // cy.get('.payment__form-defolt').contains('Покупка прошла успешно'); 
    })
 })
 
