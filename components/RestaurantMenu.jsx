import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import React from "react";
import useMenuData from "../utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useMenuData(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info ?? {};

  const { itemCards } =
    resMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;

  const categories =
    resMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-bold text-lg my-4">{cuisines.join(", ")}</p>
      <h3 className="font-bold text-lg my-4">{costForTwoMessage}</h3>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setNot={() => setShowIndex(999)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
