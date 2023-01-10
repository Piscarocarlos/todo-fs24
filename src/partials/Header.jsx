import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-task">Add Task</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/list-task">List Tasks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/appartements">Appartements</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
