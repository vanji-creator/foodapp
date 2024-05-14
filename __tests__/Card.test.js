import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import MOCK_DATA from "../mocks/cardMock.json";
import "@testing-library/jest-dom";

it("should render card component with the props data", () => {
  render(<Card restData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument;
});
