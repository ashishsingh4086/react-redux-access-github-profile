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
          <div className="container-out">
            <div className="container-call">
              <img src={this.props.user.avatar_url} />
            </div>
            <div className="container-call-1">
              <span>
                <strong>Public Repos:&nbsp;</strong>{" "}
                {this.props.user.public_repos}{" "}
              </span>
              <span>
                <strong>Public Gists:&nbsp;</strong>
                {this.props.user.public_gists}{" "}
              </span>
              <span>
                {" "}
                <strong>Followers:&nbsp;</strong> {this.props.user.followers}{" "}
              </span>
              <span>
                <strong>Following:&nbsp;</strong> {this.props.user.following}{" "}
              </span>
              <span>
                <strong>Bio:&nbsp;</strong> {this.props.user.bio}{" "}
              </span>
            </div>
          </div>
      <div className="container">
          <div className="container-link">
            <div className="container-location">
              {this.props.user.location}
              </div>
              <div className="container-company">
              {this.props.user.company}
              </div>
              <div className="container-email">
              {this.props.user.email}
              </div>
        
              <div className="container-htm-url">
             <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
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
