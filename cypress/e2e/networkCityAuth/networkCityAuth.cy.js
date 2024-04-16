describe('Auth attempt with NetworkCiry', () => {
    it('Auth attempt', () => {
      cy.fixture('url').then(url => {
        cy.log('Переход на страницу авторизации')
        cy.visit(url.login)
      })
  
      cy.fixture('networkCity').then(data => {
          cy.log("Ссылка входа в сетевой город")
          cy.get('.button-login__network-city-desktop')
            .click()

          cy.log("Поле логина")
          cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(data.login)

          cy.log("Поле пароля")
          cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
            .type(data.password)

          cy.wait(500)

          cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button > .button')
            .click()
      })   
    });
  });