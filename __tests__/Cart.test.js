import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/cartMock.json";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render RestaurantMenu Component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Desserts (6)");
  fireEvent.click(accordianHeader);
  const itemList = screen.getAllByTestId("itemlist");
  expect(itemList.length).toBe(6);
  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  expect(screen.getByText("Cart (0) items")).toBeInTheDocument();
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1) items")).toBeInTheDocument();
  expect(screen.getAllByTestId("itemlist").length).toBe(7);
  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
  expect(screen.getAllByTestId("itemlist").length).toBe(6);
  expect(
    screen.getByText("Your cart is empty, Add items to your cart")
  ).toBeInTheDocument();
});
