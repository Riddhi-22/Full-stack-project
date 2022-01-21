import React from "react";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Riddhi's First React app</a> */}
    <a className="navbar-brand" href="#">Clockify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
      {/* <span className="navbar-text">
          Follow me here
      </span> */}
      <button type="button" className="btn btn-outline-secondary" style={{marginRight:"15px"}}>Log In</button>
      <button type="button" className="btn btn-secondary">Sign Up</button>
    </div>
  </div>
</nav>
    )
}

export default Navbar;