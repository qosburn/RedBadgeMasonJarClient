import React, { Component } from 'react';

class Sitebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sitebar">
        <div className="sitebar-list-styling">
          <a class="nav" onClick={this.props.clickLogout}>
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default Sitebar;
