import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("El botón se debería renderizar correctamente", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
