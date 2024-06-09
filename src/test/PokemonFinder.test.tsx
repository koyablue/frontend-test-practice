import { describe, expect, test } from "vitest";
import PokemonFinder from "../components/PokemonFinder";
import { render, screen } from "@testing-library/react";

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
});
