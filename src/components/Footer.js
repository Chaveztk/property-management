import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Footer extends React.Component{
  constructor() {
    super()
  }
  render() {
    return(
      <div>
      <footer class="footer py-4">
          <div class="container">
              <div class="row align-items-center">
              <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2020</div>

                  <div class="col-lg-4 my-3 my-lg-0">
                      {/*<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>*/}
                  </div>
                  <div class="col-lg-4 text-lg-end">
                      <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                      <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                  </div>
              </div>
          </div>
      </footer>
      </div>
    )
  }
}



export default Footer;