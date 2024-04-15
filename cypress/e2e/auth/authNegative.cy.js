describe('Auth attempt', () => {
    it('Negative auth login', () => {
        cy.fixture('url').then(url => {
            cy.log('Переход на страницу авторизации')
            cy.visit(url.login)
        })

        cy.fixture('auth').then(data => {

            cy.log('Ввод логина');
            cy.get('.form-input--text')
                .type(data.none_existent_login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password')
                .type(data.none_existent_password)

            cy.wait(500);

            cy.get(':nth-child(3) > .button')
                .click()

            cy.get('.form-error > span')
                .should('exist')
        })   
    });
});
  