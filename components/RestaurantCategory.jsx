import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //   const { data } = props;
  const { data, showItems, setShowIndex, setNot } = props;
  const { title } = data;
  const { length } = data.itemCards;
  const handleClick = () => {
    if (showItems === true) {

      setNot();
      return;
    }
    setShowIndex();
  };

  return (
    <div className="mx-auto my-4 w-6/12 p-4 shadow-lg bg-gray-200">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="mx-4 my-4 font-bold">
          {title} ({length})
        </span>
        <span className="text-2xl">⬇</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
