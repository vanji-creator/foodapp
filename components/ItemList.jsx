import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="itemlist"
          key={item.card.info.id}
          className="p-2 m-2 border-b-8 border-white text-left flex flex-nowrap "
        >
          <div className="flex-1">
            <span className=" block">{item.card.info.name}</span>
            <span>
              ₹&nbsp;
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          <div className="flex-shrink-0 mx-2">
            <img
              className="w-36 h-36 rounded-lg "
              src={MENU_IMG + item.card.info.imageId}
              alt="picture of the item"
            />
            <div className="absolute -my-10 mx-9">
              <button
                className="border px-4 py-2 border-gray-800 rounded-md bg-gray-800  text-white shadow-lg"
                onClick={() => handleItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
