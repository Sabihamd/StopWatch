import StopWatchClass from "../../src/components/StopWatchClass"

describe('StopWatch.cy.js', () => {
  beforeEach(()=>cy.mount(<StopWatchClass/>))

  it('timer starts correctly', ()=>{
    cy.get('.start').click()
    cy.get('.seconds').should('contain.text', 1)
  })
  
  it('timer pauses correctly', ()=>{
    cy.get('.start').click()
    cy.get('.seconds').should('contain.text', 1)
    cy.get('.pause').click()
    cy.get('.seconds').should('contain.text', 1)
  })

  it('timer resumes correctly', ()=>{
    cy.get('.start').click()
    cy.get('.seconds').should('contain.text', 1)
    cy.get('.pause').click()
    cy.get('.seconds').should('contain.text', 1)
    cy.get('.resume').click()
    cy.get('.seconds').should('contain.text', 2)
  })

  it('timer resets correctly', ()=>{
    cy.get('.start').click()
    cy.get('.seconds').should('contain.text', 1)
    cy.get('.pause').click()
    cy.get('.seconds').should('contain.text', 1)
    cy.get('.resume').click()
    cy.get('.seconds').should('contain.text', 2)
    cy.get('.resume').click()
    cy.get('.seconds').should('contain.text', 2)
    cy.get('.reset').click()
    cy.get('.seconds').should('contain.text', 0)
  })
})