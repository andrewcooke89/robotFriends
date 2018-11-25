import React, { Component } from "react";
import { connect } from "react-redux";
import { AddRobots } from "../store/actions/fetchRobots";

class AddRobot extends Component {
  state = {
    robot: {
      name: "",
      email: "",
      id: null
    }
  };

  render() {
    const onRobotNameChange = event => {
      const robot = { ...this.state.robot };
      robot.name = event.target.value;
      this.setState({ robot: robot });
      console.log(this.state.robot);
    };

    const onRobotEmailChange = event => {
      const robot = { ...this.state.robot };
      robot.email = event.target.value;
      this.setState({ robot: robot });
      console.log(this.state.robot);
    };

    const addRobot = () => {
      const robotsArr = this.props.robots;
      const robotId = Math.random();
      const newRobot = { ...this.state.robot };
      newRobot.id = robotId;
      this.setState({ robot: newRobot });
      robotsArr.push(this.state.robot);
      this.props.onAddRobot(robotsArr);
    };
    const styles = {
      padding: "5px",
      marginLeft: "10px",
      borderRadius: "5px",
      height: "50px"
    };

    return (
      <div>
        <input
          type="text"
          name="robotName"
          placeholder="Name"
          className="pa3 ba b--greeb bg-lightest-blue"
          onChange={onRobotNameChange}
        />
        <input
          type="text"
          name="robotEmail"
          placeholder="Email"
          className="pa3 ba b--greeb bg-lightest-blue"
          onChange={onRobotEmailChange}
        />
        <button className="bg-lightest-blue" style={styles} onClick={addRobot}>
          Add Robot
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    robots: state.robotsReducer.robots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddRobot: robot => dispatch(AddRobots(robot))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRobot);
