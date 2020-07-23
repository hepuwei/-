import React from "react";
import {RouteConfig} from "router";
import routeEach from "utils/routeEach";
import { HashRouter as Route, Switch, Redirect } from 'react-router-dom';


class App extends React.Component {
  render(){
    return(
      <Route>
          <Switch>
            <Redirect from="/" to="/shoping" exact />
            {routeEach(RouteConfig)}
          </Switch>
      </Route>
    )
  }
}
export default App;