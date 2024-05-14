import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((Store) => Store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl m-2">Cart</h1>
      <div className="w-2/5 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="text-xl">
            Your cart is empty, Add items to your cart
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
