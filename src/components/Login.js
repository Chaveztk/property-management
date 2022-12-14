import React from 'react';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <section className="page d-flex justify-content-center align-items-center"
                     style={{backgroundColor: '#9A616D'}}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col col-xl-10">
                            <div className="card" style={{borderRadius: '1rem'}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                            alt="login form"
                                            className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fa fa-cubes fa-2x me-3" style={{color: '#ff6219'}}/>
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into
                                                    your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="" className="form-control form-control-lg"/>
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27"
                                                           className="form-control form-control-lg"/>
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button">Login
                                                    </button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an
                                                    account? <Link to='/register' href="#!" style={{color: '#393f81'}}>Register
                                                        here</Link></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;
