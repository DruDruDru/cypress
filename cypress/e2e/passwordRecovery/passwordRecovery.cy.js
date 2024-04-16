describe('Password recovery', () => {
    it('attempt', () => {
      cy.fixture('url').then(url => {
        cy.log('Переход на страницу авторизации')
        cy.visit(url.login)
      })
  
      cy.fixture('passwordRecovery').then(data => {
          cy.log("Сссылка на восстановление пароля")
          cy.get(':nth-child(2) > .subtitle > .subtitle__link > a')
            .click()

          cy.wait(500);

          cy.log("Ввод email")
          cy.get('.form-input--email')
            .type(data.email)

          cy.wait(500);

          cy.log("Отправка")
          cy.get('.recover-form__button > .button')
            .click()

          cy.log("Проверка на поп-ап")
          cy.get('.desktop-modal__content')
            .should('exist')
      })   
    });
  });
  