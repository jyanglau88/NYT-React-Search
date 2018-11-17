import React from "react";
import { Link } from 'react-router-dom';

const Nav = () =>
  <nav className="jumbotron main-bg-color">
    <div className="container-fluid">
    <h5 className="display-4">New York Times React Search</h5>
      <div className="float-right">
      <button className="btn btn-warning mr-3"> <Link to="/" >
          Home
        </Link></button>
          <button className="btn btn-warning mr-3"><Link to="/search">Search</Link></button>
          <button className="btn btn-warning"><Link to="/saved">Saved</Link></button>
      </div>
    </div>
  </nav>;

export default Nav;
