import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { restData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines } = restData.info;
  const { slaString } = restData.info.sla;
  return (
    <div
      data-testid="card"
      className=" res-card w-[250px] m-2 h-[300px] border rounded-lg hover:scale-105 duration-0"
    >
      <img
        className="w-full h-[175px] rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-md font-bold py-2 siz res-name">{name}</h3>
      <h4>
        {avgRating} • {slaString}
      </h4>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};



export default Card;
