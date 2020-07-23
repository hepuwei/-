import React, { Component } from 'react';
import {HeaderContainer} from "./styled";
import PropTypes  from "prop-types";
import {withRouter} from "react-router-dom"
@withRouter

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <HeaderContainer>
        <div className="headLe" onClick={this.handleGoBack.bind(this)}>
            <i className="iconfont">&#xe672;</i>
            <span>返回</span>
        </div>
        <div className="headCe">
          <span>{this.props.title}</span>
        </div>
        <div className="headRi">
          <span className="iconfont">&#xe748;</span>
        </div>
      </HeaderContainer>
    );
  }
  handleGoBack(){
    this.props.history.goBack();
  }
}

export default Header;

Header.propTypes ={
  title:PropTypes.string
}
Header.defaultProps = {
  title:"哈哈哈"
}