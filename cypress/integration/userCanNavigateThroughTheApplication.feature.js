describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('to About tab and it', () => {
    beforeEach(() => {
      cy.get('#about-tab').click();
    });

    it('displays About header', () => {
      cy.get('#about-header').should('contain', 'About');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "about");
    })

    it('does not display My Projects header ', () => {
      cy.get('#projects-header').should('not.exist');
    });

    it('does not display Hi Im Kayla Woodbury', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('to My Projects tab and it',() => {
    beforeEach(() => {
      cy.get('#projects-tab').click();
    });

    it('displays My Projects header', () => {
      cy.get('#projects-header').should('contain', 'Projects');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "projects");
    })

    it('does not display About Me header ', () => {
      cy.get('#about-header').should('not.exist');
    });

    it('does not display Hello world', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('to Contact tab and it', () => {
    beforeEach(() => {
      cy.get('#contact-tab').click();
    });

    it('displays Contact header', () => {
      cy.get('#contact-header').should('contain', 'Contact');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "contact");
    })

    it('does not display My Projects header ', () => {
      cy.get('#projects-header').should('not.exist');
    });

    it('does not display Hi Im Kayla Woodbury', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('back to My Portfolio/Hello tab and it',() => {
    beforeEach(() => {
      cy.get('#about-tab').click();
      cy.get('#header').click();
    });

    it('displays Hello World', () => {
      cy.get('#hello').should('contain', 'Hi');
    });

    it('displays correct url', () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");    
    })

    it('does not display About Me header ', () => {
      cy.get('#about-header').should('not.exist');
    });

    it('does not display My Projects header', () => {
      cy.get('#projects-header').should('not.exist');
    });
  });
});