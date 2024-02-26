import { render, screen } from "@testing-library/react";
import BtnGeneratePsw from "./BtnGeneratePsw";

describe("Button Comp", () => {
  test("should render Button", () => {
    render(<BtnGeneratePsw />);
    expect(
      screen.getByRole("button", { name: "🔑 Generate password" })
    ).toBeInTheDocument();
  });
});
