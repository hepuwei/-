import React, { Component } from 'react';
import {TabBarContainer} from "./styled";
import {NavLink} from "react-router-dom"
import {TabBarRoute} from "router";


class TabBar extends Component {
  render() {
    return (
        <TabBarContainer>
            <ul>
              {
                TabBarRoute.map((item)=>(
                  <NavLink key={item.path} to={item.path} activeClassName="active">
                    <i className="iconfont">{item.icon}</i>
                <span>{item.text}</span>
                  </NavLink>
                ))
              }
            </ul>
        </TabBarContainer>
    );
  }
}

export default TabBar;
