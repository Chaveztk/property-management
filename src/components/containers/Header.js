import React from 'react';


function Header(props) {
    return (
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">{props.title}</h1>
                            <p className="lead fw-normal text-white-50 mb-4">{props.subheading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
