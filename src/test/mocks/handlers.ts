import { http, HttpResponse } from "msw";

const pokemon = {
  "25": {
    name: "pikachu",
    sprites: { front_default: "http://example.com/pikachu.png" },
  },
};

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon/${pokemonId}", () => {
    if (pokemon) {
      return HttpResponse.json(pokemon, { status: 200 });
    } else {
      return HttpResponse.json({ message: "Not Found" }, { status: 404 });
    }
  }),
];