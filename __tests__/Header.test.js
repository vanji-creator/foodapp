import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing header component", () => {
  it("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const button = screen.getByText("login");
    const button = screen.getByRole("button", { name: "login" });

    expect(button).toBeInTheDocument();
  });

  it("should render header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const button = screen.getByText("login");
    const cartItems = screen.getByText("Cart (0) items");

    expect(cartItems).toBeInTheDocument();
  });

  it("should render header component with a cart present", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const button = screen.getByText("login");
    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
  });

  it("should check if login button changes to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const button = screen.getByText("login");
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
