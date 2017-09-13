import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FetchList extends Component {
  render() {
    console.log(this.props.user);
    if (!this.props.user) {
      console.log(this.props.user);
    } else {
      return (
        <div>
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={this.props.user.avatar_url} />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content" />
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { user: state.UserReducer };
}

export default connect(mapStateToProps)(FetchList);

FetchList.PropTypes = {
  avatar_url: PropTypes.string
};
