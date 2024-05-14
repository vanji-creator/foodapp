import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "dummy",
      },
    };
  }

  componentDidUpdate() {
    console.log(" component did update");
  }

  componentWillUnmount() {
    console.log(" component unmounted");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");
    const data = await fetch("https://api.github.com/users/vanji-creator");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name : {name}</h1>
        <h2>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>logged in user : {loggedInUser}</h2>}
          </UserContext.Consumer>
        </h2>
        <h2>Location : {location}</h2>
        <h2>Contact : @vanji-creator</h2>
      </div>
    );
  }
}

export default UserClass;
