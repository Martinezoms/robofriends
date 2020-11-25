import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../Components/SearchBox';
import Cardlist from '../Components/CardList';
import Scroll from './Scroll';

import { setSearchField, requestRobots } from '../Actions/Actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { onSearch, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc">Loading....</h1>
    ) : (
      <div className="tc">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={onSearch} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
