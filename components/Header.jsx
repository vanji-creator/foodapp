import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const cartItems = useSelector((Store) => Store.cart.items);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-xl">
      <div className="logo-container">
        <img className="w-20" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items lg:bg-gray-200 sm:bg-green-400 ">
        <ul className="flex p-4 m-4">
          <li className=" px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className=" px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length}) items</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
