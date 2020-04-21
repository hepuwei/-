import React, { Component,Fragment } from 'react';
import TabBar from "components/tabBar"

class Layout extends Component {
  render() {
    return (
        <Fragment>
          {this.props.children}
          <TabBar/>
        </Fragment>
    )
  }
}

export default Layout;
