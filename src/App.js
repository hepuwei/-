import React from "react";
// import {RouteConfig} from "router";
// import routeEach from "utils/routeEach";
import TabBar from "components/tabBar"
import { HashRouter as Route, Switch, Redirect } from 'react-router-dom';


class App extends React.Component {
  render(){
    return(
      // <Route>
      //     <Switch>
      //       <Redirect from="/" to="/shoping" exact />
      //       {routeEach(RouteConfig)}
      //     </Switch>
      // </Route>
      <TabBar/>
    )
  }
}
export default App;