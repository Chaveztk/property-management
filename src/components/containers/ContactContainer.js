import React from 'react';
import Google from "./GoogleContainer";


function ContactContainer() {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col">
                    <h2 className="display-6 lh-1 mb-4 fw-bolder">Where we Operate</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5">
                    <p className='lead'>
                        The strength of our company is in that we're an online run management
                        company, this has given us the ability to communicate with our client more effectively
                        across the UK.
                        <br/>
                        Our team work 24/7 ensuring our clients can rest assured that their property is in safe
                        hands. As a new customer, our team at Quoin management would be glad to answer any of your
                        requests. Please use the form below or send us an email to get in touch.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="d-flex justify-content-end align-items-center h-100">
                        <Google/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ContactContainer;
