import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {withRouter} from 'react-router'
import Main from './Main'
import BACKEND_SERVER_URL from './constants/server';
import Auth from './../Auth'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      itemsUrl:"http://localhost:3001/api/items",
      usersUrl:"http://localhost:3001/api/users",
      itemsData: [],
      classnames: ["nav-item active", "nav-item", "nav-item", "nav-item", "nav-item"]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    var num = parseInt(event.currentTarget.dataset.id)
    switch(num){
      case 1:
        this.setState({
          classnames: ["nav-item active", "nav-item", "nav-item", "nav-item", "nav-item"]
        })
        break;
      case 2:
          this.setState({
            classnames: ["nav-item", "nav-item active", "nav-item", "nav-item", "nav-item"]
          })
          break;
      case 3:
          this.setState({
            classnames: ["nav-item", "nav-item", "nav-item active", "nav-item", "nav-item"]
          })
          break;
      case 4:
          this.setState({
             classnames: ["nav-item", "nav-item", "nav-item", "nav-item active", "nav-item"]
          })
          break;
      case 5:
          this.setState({
             classnames: ["nav-item", "nav-item", "nav-item", "nav-item", "nav-item active"]
          })
          Auth.deauthenticateUser();
          window.location.reload();
          break;
      default:
        break;
    }
  }

  componentDidMount(){
    console.log("Mounted")
  }

  render(){
      return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <a className="navbar-brand" href="#">CampusBarter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link to="/barterlist">
              <li className={this.state.classnames[1]} data-id="2" onClick={this.handleClick}>
                <a className="nav-link" href="#">Barter List</a>
              </li>
              </Link>
              <Link to="/services">
              <li className={this.state.classnames[2]} data-id="3" onClick={this.handleClick}>
                <a className="nav-link" href="#">Services</a>
                <span className="sr-only">(current)</span>
              </li>
              </Link>
              <Link to="/inbox">
              <li className={this.state.classnames[3]} data-id="4" onClick={this.handleClick}>
                <a className="nav-link" href="#">Inbox</a>
              </li>
              </Link>
              <li className={this.state.classnames[4]} data-id="5" onClick={this.handleClick}>
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        <Main currentUser={Auth.getId()}/>
        </div>
      )
    }
}


export default withRouter(App)
