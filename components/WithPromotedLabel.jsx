import Card from "./Card";

const WithPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label>
          Promoted
          <Card {...props} />
        </label>
      </div>
    );
  };
};

export default WithPromotedLabel;
