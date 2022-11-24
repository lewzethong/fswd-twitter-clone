import React from "react";
import { authenticate, logoutUser } from "../../utils/request";

export default class FeedNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'test',
    }

    this.getUserName = this.getUserName.bind(this);
    this.logout = this.logout.bind(this)
  };

  componentDidMount () {
    this.getUserName();
  }

  getUserName = () => {
    authenticate((data) => {
      this.setState({
        username: data.username
      })
    })
  }

  logout = () => {
    logoutUser(success => {
      window.location.href = '/'
    })
  }


  render() {
    const {username} = this.state
    return (
      <>
        <nav className="navbar navbar-light bg-light py-0 fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="d-flex">
              <div className="search-bar nav navbar-right">
                <div className="input-group">
                  <input type="text" className="form-control py-0 search-input" placeholder="Search for..."/>
                  <span className="input-group-btn">
                    <button className="btn search-btn" type="button">Go!</button>
                  </span>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {username}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li ><a href="#" className="username">{username}</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Lists</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Help</a></li>
                  <li ><a href="#">Keyboard shortcuts</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Settings</a></li>
                  <li ><a id="log-out" href="#" onClick={this.logout}>Log out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}