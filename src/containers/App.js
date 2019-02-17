import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import * as actions from "../store/actions/searchField";
import { requestRobots } from "../store/actions/fetchRobots";
import { connect } from "react-redux";
import AddRobot from "../components/AddRobot";
import DeleteRobot from "../components/DeleteRobot";

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.props.searchField.toLocaleLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <AddRobot />
        <DeleteRobot />
        <SearchBox searchChange={this.props.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchFieldReducer.searchField,
    robots: state.robotsReducer.robots,
    isPending: state.robotsReducer.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(actions.searchChange(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
