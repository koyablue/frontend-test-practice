describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("passes", () => {
    cy.get('[data-testid="poke-finder-title"]').should("exist");
  });

  it("display pokemon", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/25", {
      statusCode: 200,
      body: {
        id: 25,
        name: "pikachu",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
      },
    }).as("getPokemonById");

    cy.get('input[name="pokemonId"]').type("25");
    cy.get('button[data-testid="poke-finder-submit"]').click();
    cy.wait("@getPokemonById");
    cy.get(
      'img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"]'
    ).should("exist");
  });
});
