import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/menu';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showMenu: false
    }
  }
  render() {
    const { showMenu } = this.state
    return (
      <div className="app">
        <div className="bodyOne">
          <nav> 
            <div className="header">
              <div className="brand small"> Start Bootstrap</div>
              <div className="menu small">
    <button className="menuButton" onClick={() => this.setState({showMenu: !showMenu})}>MENU <Icon icon={menu}/></button>
              </div>
              <div className="brand large"> Start Bootstrap</div>
              <div className="menu large">
              <div className="navMenuList large">
              <ul>
                <li><a className="navMenuOption" href=''>SERVICES</a></li>
                <li><a className="navMenuOption" href=''>PORTFOLIO</a></li>
                <li><a className="navMenuOption" href=''>ABOUT</a></li>
                <li><a className="navMenuOption" href=''>TEAM</a></li>
                <li><a className="navMenuOption" href=''>CONTACT</a></li>
              </ul>
              </div>
              </div>
            </div>
              <ul className={showMenu ? "navMenuList open small" : "navMenuList small"}>
              <li><a  className="navMenuOption" href=''>SERVICES</a></li>
              <br/>
              <li><a  className="navMenuOption" href=''>PORTFOLIO</a></li>
              <br/>
              <li><a  className="navMenuOption" href=''>ABOUT</a></li>
              <br/>
              <li><a  className="navMenuOption" href=''>TEAM</a></li>
              <br/>
              <li><a  className="navMenuOption" href=''>CONTACT</a></li>
              <br/>
              </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
