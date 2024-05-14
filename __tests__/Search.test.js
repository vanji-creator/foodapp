import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Section from "../components/Section";
import MOCK_DATA from "../mocks/sectionMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should check search functionality and cards rendering", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Section />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("card");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "p" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(4);
});

test("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Section />
      </BrowserRouter>
    )
  );
  const ratedBtn = screen.getByTestId("rated");
  fireEvent.click(ratedBtn);
  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBeLessThan(20);
});
