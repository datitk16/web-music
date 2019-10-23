import React, { Component } from 'react';
import Header from './Home/Header/Header';
import Footer from './Home/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routers'
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div id="intro"></div>

        {this.contentMenu(routes)}
        <Footer />
      </BrowserRouter>



    );

  }
  contentMenu = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;