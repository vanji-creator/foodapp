import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("test if contact component contains a heading tag", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("test if contact component has a button tag", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("check if 2 texboxes are rendered", () => {
    render(<Contact />);
    const textBoxes = screen.getAllByRole("textbox");
    expect(textBoxes.length).toBe(2);
  });
});
