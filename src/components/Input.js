import React, { Component } from 'react';
import Profile from "../containers/Profile";
import FetchList from "../containers/Fetch";
export default class Input extends Component {

    render() {
        return (
            <div className="containerFlex">
                <div className="container">
              <Profile/>
            <div style={{paddingTop:'20px'}}>
              <FetchList/>
              </div>
            </div>
            </div>
        )
    }
}
