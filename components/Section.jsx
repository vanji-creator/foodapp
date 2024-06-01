import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import WithPromotedLabel from "./WithPromotedLabel";
import data from "../utils/data.json";

const Section = () => {
  const [restList, setrestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchName, setSearchName] = useState("");
  const [listFilter, setlistFilter] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const { setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You are offline</h1>;

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistFilter(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setrestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantPromoted = WithPromotedLabel(Card);

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="section">
      <div className="filter p-6 flex items-center">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn ml-2 px-4 py-1 bg-gray-300 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listFilter.filter((res) => {
                // console.log(res.info.name);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim());
              });
              setrestList(filteredRestaurants);
              // console.log(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          data-testid="rated"
          className="filter-btn ml-2 px-4 py-1 bg-gray-300 rounded-lg"
          onClick={() => {
            let List = restList.filter((res) => res.info.avgRating > 4.1);
            setrestList(List);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn ml-2 px-4 py-1 bg-gray-300 rounded-lg"
          onClick={() => {
            setrestList(listFilter);
          }}
        >
          Display All
        </button>
        <label className="ml-2 px-4 py-1">user name :</label>

        <input
          className="border border-black px-2"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button
          className="filter-btn ml-2 px-4 py-1 bg-gray-300 rounded-lg"
          onClick={() => setUserName(searchName)}
        >
          set
        </button>
      </div>
      <div className="res-container flex flex-wrap m-4 justify-between">
        {restList.map((restData) => (
          <Link key={restData.info.id} to={"/restaurants/" + restData.info.id}>
            {restData.promoted ? (
              <RestaurantPromoted restData={restData} />
            ) : (
              <Card restData={restData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Section;
