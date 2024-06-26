describe('Uptdae organization', () => {
    it('update', () => {
      cy.fixture('url').then(url => {
        cy.log('Переход на страницу авторизации')
        cy.visit(url.login)
      })
  
      cy.fixture('auth').then(data => {
          cy.log('Ввод логина');
          cy.get('.form-input--text')
            .type(data.employerLogin)
  
          cy.log('Ввод пароля')
          cy.get('.form-input--password')
            .type(data.employerPassword)
  
          cy.wait(500);
  
          cy.get(':nth-child(3) > .button')
            .click()
      })   

      cy.fixture('updateOrganization').then(data => {
        cy.log("Вкладка организации")
        cy.get(':nth-child(4) > .menu-item__item-name')
            .click()

        cy.log("Ввод названия")
        cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text')
            .clear()
            .type(data.invalidName)

        cy.log("Ввод описания")
        cy.get('.form-area')
            .clear()
            .type(data.invalidDescription)

        cy.log("Ввод контактного лица")
        cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text')
            .clear()

        cy.log("Ввод адреса")
        cy.get(':nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text')
            .clear()

        cy.log("Ввод номера телефона")
        cy.get('.contacts__fields > :nth-child(1) > .form-control--max > .form-input--text')
            .clear()
            .type(data.invalidNumber)

        cy.log("Ввод электронной почты")
        cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text')
            .clear()
            .type(data.invalidEmail)

        cy.log("Ввод сайта")
        cy.get(':nth-child(3) > .form-control--max > .form-input--text')
            .clear()
            .type(data.invalidSite)

        cy.wait(1000);

        cy.log("Проверка сообщений об ошибках");
        cy.get('.about-org > :nth-child(1) > .form-error > span')
            .should('exist')
        cy.get(':nth-child(3) > :nth-child(2) > .form-error > span')
            .should('exist')
        cy.get('.contacts__fields > :nth-child(1) > .form-error > span')
            .should('exist')
        cy.get('.contacts__fields > :nth-child(2) > .form-error > span')
            .should('exist')
        cy.get(':nth-child(3) > .form-error')
            .should('exist')
      });
    });
  });
  