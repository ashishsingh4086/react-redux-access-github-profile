import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../actions";
import Input from "../components/Input";
import FetchList from "./Fetch";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      showList: false
    };
  }

  onInputChange = e => {
    if (!e.target.value) {
      this.setState(
        {
          term: ""
        },
        () => {
          this.props.fetchUser(this.state.term);
        }
      );
    }
    this.setState(
      {
        term: e.target.value
      },
      () => {
        this.props.fetchUser(this.state.term);
      }
    );
  };

  render() {
    return (
      <div className="input-field col s6">
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="Please enter a username"
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Profile);
