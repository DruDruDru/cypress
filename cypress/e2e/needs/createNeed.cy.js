describe('Create Need', () => {
    it("create", () => {
        cy.fixture('url').then(url => {
            cy.setResolution(1920, 1080);
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

            cy.log('Кнопка входа');
            cy.get(':nth-child(3) > .button')
                .click()
        })

        cy.fixture('need').then(data => {
            cy.log('Вкладка потребностей в профиле')
            cy.get(':nth-child(6) > .menu-item__item-name')
                .click()

            cy.log("Создание потребности")
            cy.get('.needs-block__filters-wrapper > .button')
                .click()

            cy.log("Ввод названия")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type(data.name)

            cy.log("Ввод обязаностей")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area') 
                .type(data.requirements)

            cy.log("Ввод требований")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(data.responsibilities)

            cy.log("Создание требования")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
                .click();
        })
    })
});