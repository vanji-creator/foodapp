import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);
  console.log(name);
  return (
    <div className="user-card">
      <h1>Name : {name}</h1>
      <h2>Location : India</h2>
      <h2>Contact : @vanji-creator</h2>
      <h3>{count}</h3>
    </div>
  );
};

export default User;
