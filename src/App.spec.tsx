import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.test.tsx", () => {
  it("Should have the 'Vite + React' text visible in the User Agent", () => {
    render(<App />);

    console.log(process.env.VITE_TEST);

    expect(
      screen.getByRole("heading", { name: /Vite \+ React/i })
    ).toBeInTheDocument();
  });
});
