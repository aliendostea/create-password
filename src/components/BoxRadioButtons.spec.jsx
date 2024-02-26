import { render, screen } from "@testing-library/react";
import { BoxRadioButtons } from "./BoxRadioButtons";
import { passwordStrength } from "@/const";

describe("BoxRadioButtons Comp", () => {
  test("should render BoxRadioButtons", () => {
    render(<BoxRadioButtons passwordStrengthLevels={passwordStrength} />);
    expect(
      screen.getByText("Choose the password strength")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("low")).toBeInTheDocument();
  });
  // test("should render Button", () => {
  //   render(<BtnGeneratePsw />);
  //   expect(
  //     screen.getByRole("button", { name: "🔑 Generate password" })
  //   ).toBeInTheDocument();
  // });
});
