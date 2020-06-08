import React, { Component } from 'react'
import { Button } from 'antd';

import { BrowserRouter,Switch } from 'react-router-dom'
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Admin from './pages/Admin';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AdminTemplate exact path='/admin' component={Admin} />
          <HomeTemplate exact path='/moviedetail/:maPhim' component={MovieDetail} />
          <HomeTemplate exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

