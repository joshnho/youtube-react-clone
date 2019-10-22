import React from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav'
import SideBar from './components/SideBar/SideBar';

export default class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <HeaderNav />
        <SideBar />
      </React.Fragment>
    )
  }
}
