import React, { Component, Fragment } from 'react';
import Header from "components/header";
import { PageContainer, NowCityContainer, CityMarketContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: true,
      title: [{
        id: 1,
        name: "百货"
      }, {
        id: 2,
        name: "超市"
      }],
      ind: 1,
      defaultid: props.cityId,
      defaultStore:props.storeId
    }
  }
  render() {
    let { addressName, cityList } = this.props;
    let { title, ind, defaultid,defaultStore } = this.state;
    return (
      <PageContainer>
        <Header title="选择门店" />
        <NowCityContainer>
          当前城市:
            <span>
            {addressName}
          </span>
        </NowCityContainer>
        <CityMarketContainer>
          <div className="city">
            {
              cityList.map((item) => (
                <div className="cityBox" key={item.index}>
                  <p>{item.index}</p>
                  {
                    item.list.map((ite) => (
                      <div className="cityName" onClick={this.handleCity.bind(this,ite.id)} style={{ color: defaultid === ite.id ? '#ff4c48' : "#000" }} key={ite.id}>
                        <span>{ite.name}</span>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>
          <div className="market">
            <div className="marketTop">
              {
                title.map((item) => (
                  <span key={item.id} onClick={this.handleClick.bind(this, item.id)} style={{ backgroundColor: item.id === ind ? "#ff4c48" : "#fff", color: item.id === ind ? "#fff" : "#ff4c48" }}>{item.name}</span>
                ))
              }
            </div>
            <div className="marketBot">
              {
                cityList.map((child) => (
                  <Fragment key={child.index}>
                    {
                      child.list.map((chi,is) => (
                        chi.id === defaultid ? <Fragment key={chi.id}>
                          {
                            chi.storeList.map((ch,ih) => (
                              ch.type === ind ? <div className="marketOne" onClick={this.handleChangeCity.bind(this,ch)} key={ch.id} style={{color:defaultStore ===ch.id?"#ff4c48":"#000"}}>
                                <span>{ch.name}</span>
                              </div> : <Fragment key={ih}></Fragment>
                            ))
                          }
                        </Fragment> : <Fragment key={is}></Fragment>

                      ))
                    }
                  </Fragment>
                ))
              }


            </div>
          </div>
        </CityMarketContainer>
      </PageContainer>
    );
  }
  handleChangeCity(newCity){
    this.props.handleAsyncChangeCity(newCity);
    this.props.history.push('/market')
  }
  handleCity(cityIndex){
    this.setState({
      defaultid:cityIndex
    })
  }
  handleClick(index) {
    this.setState({
      ind: index
    })
  }
  componentDidMount() {
    if (!localStorage.getItem('cityList')) {
      let { hide } = this.state;
      let _time = new Date().getTime();
      this.props.handleAsyncCityId(hide, _time)
    }

  }
}

export default City;
