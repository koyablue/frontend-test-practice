import { describe, expect, test } from "vitest";
import PokemonFinder from "../components/PokemonFinder";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe(PokemonFinder, () => {
  test("Initial rendering occurs correctly", () => {
    render(<PokemonFinder />);
    expect(screen.getByText("ポケモンファインダー")).toBeInTheDocument();
    expect(screen.getByText("ポケモンを見つける")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ポケモンを見つける" })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("ポケモンのIDを入力")
    ).toBeInTheDocument();
  });

  test("Fetched pokemon data will be displayed", async () => {
    render(<PokemonFinder />);

    const user = userEvent.setup();
    const inputElement = screen.getByPlaceholderText("ポケモンのIDを入力");
    await user.type(inputElement, "25");

    const buttonElement = screen.getByRole("button", {
      name: "ポケモンを見つける",
    });
    await user.click(buttonElement);

    const pokemonName = screen.getByText("pikachu");
    expect(pokemonName).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "http://example.com/pikachu.png");
    expect(image).toHaveAttribute("alt", "pikachu");
  });
});
