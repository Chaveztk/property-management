import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      headerOpen: false,
      user: {}
    }
    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader() {
    this.setState({ headerOpen: !this.state.headerOpen })
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if(prevProps.headerOpen !== this.headerOpen) {
    this.setState({ headerOpen: true });

}
}
  render() {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div class="container px-4">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fa fa-bars ms-1"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                      {/*<li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>*/}
                      <Link to='/'><li class="nav-item"><a class="nav-link" href="">Home</a></li></Link>
                      <Link to='/login'><li class="nav-item"><a class="nav-link" href="">Log In</a></li></Link>

                      <Link to='/about'><li class="nav-item"><a class="nav-link" href="">About Us</a></li></Link>
                      <Link to='/contact'><li class="nav-item"><a class="nav-link" href="">Contact Us</a></li></Link>
                      <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>


                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <Link to ='/residentialmanagement' class="dropdown-item"><li>Residential Management</li></Link>
                        <Link to ='/propertymanagement' class="dropdown-item"><li>Property Management</li></Link>
                        <Link to ='/commercialmanagement' class="dropdown-item"><li>Commercial Management</li></Link>
                      </ul>
                      </li>


                  </ul>

              </div>
          </div>
        </nav>
      </div>
    )
  }
}




export default Header
