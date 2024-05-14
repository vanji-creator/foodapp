import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent class constructor");
  }

  componentDidMount() {
    // console.log("parent class component did mount");
  }

  render() {
    //console.log("parent class render");
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"first child class"} location={"ind"} />
      </div>
    );
  }
}
export default About;
