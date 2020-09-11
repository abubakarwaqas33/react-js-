import React, { Component, Suspense  } from 'react';
import { Route, Switch} from 'react-router-dom';
import routes from './routes/routes';
import './App.css';

class App extends Component {
  render() {
    return (
     
        <div className="main-app">

          <Suspense fallback={<div>Loading... </div>}>
            <Switch>
              {routes.map((route, idx) => {

                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
            </Switch>
          </Suspense>

        </div>
     
    );
  }
}

export default App;
