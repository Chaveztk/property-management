import React from 'react';


class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer className="footer py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 text-lg-start">Copyright &copy; Website 2020</div>

                            <div className="col-lg-4 my-3 my-lg-0">
                                {/*<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>*/}
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


export default Footer;
