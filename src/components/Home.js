import React, {useState} from 'react';
import FormContainer from '../components/containers/FormContainer.js';
import ContactContainer from '../components/containers/ContactContainer.js';
import {Link} from 'react-router-dom';
import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";


function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header>
                <div className="p-5 text-center bg-image header-img">
                    <div className="d-flex align-items-center h-100">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="my-5 text-center">
                                        <h1 className="display-4 font-weight-bolder text-white mb-2">Quoin
                                            Management</h1>
                                        <p className="lead font-weight-bolder text-white mb-4">Chosen for our
                                            service. Famous for our results.</p>
                                        {/*<a className="btn btn-primary btn-lg px-4 mr-sm-3 mb-3 mr-0 d-block d-sm-inline-block"
                                           href="#features">Selling or Letting?</a>
                                        <a className="btn btn-outline-light btn-lg px-4 mb-3 d-block d-sm-inline-block"
                                           href="#!">Learn
                                            More</a>*/}
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row">
                                <div className="col">
                                    <form className="rounded-3 p-4 p-sm-5 mt-5">
                                        <div className="col align-self-center">
                                            <div className="mb-4 mb-xl-0">
                                                <div className="fs-3 font-weight-bold text-white">Selling or
                                                    Letting?
                                                </div>
                                                <div className="text-white-50">Sign up for our newsletter for the
                                                    latest
                                                    updates.
                                                </div>
                                            </div>
                                            {/*<div className="ml-xl-4 mb-3">
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        placeholder="Email address..."
                                                        aria-label="Email address..."
                                                        aria-describedby="button-newsletter"
                                                    />
                                                    <InputGroup.Append>
                                                        <Button variant="outline-light" className='mb-3'
                                                                onClick={handleShow}>Open
                                                            modal for
                                                            @getbootstrap</Button>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                                <div className="small text-white-50">We care about privacy, and will
                                                    never share your data.
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </header>

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                {/*<h2 className="section-heading text-uppercase"/>*/}
                                <h3 className="section-subheading"> It is Quoin Estates mission to help our clients from
                                    investment companies<br/>
                                    to home owners across a variety of buildings, from large blocks<br/>
                                    of flats to converted terraced properties. The services we offer are <br/>
                                    highly valued by all our clients, tenants and landlords.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link to='/residentialmanagement'>
                                    <img className="img-fluid"
                                         src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                         alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Residential
                                        Management
                                    </div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">It is within the
                                        Quoin Management teams care that our clients premises remain maintained
                                        to an excellent standard for the safe security of residents.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link to='/commercialmanagement'>
                                    <img className="img-fluid"
                                         src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                         alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Commercial
                                        Management
                                    </div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">Quoin commercial
                                        department endeavor to make sure that our clients reach maximum
                                        potential using a personalised tailored plan specially designed by our
                                        team of experts.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link to='/propertymanagement'>
                                    <img className="img-fluid"
                                         src="https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7031622.jpg&fm=jpg"
                                         alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Property
                                        Management
                                    </div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">We stand by our
                                        policy for the peace of our clients, working together with all parties
                                        to know the building in-depth, ensuring all aspects of the building are
                                        covered.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">

                                <img className="img-fluid"
                                     src="https://images.pexels.com/photos/940829/pexels-photo-940829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                     alt="..."/>

                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Compliance
                                        Management
                                    </div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">At Quoin we take
                                        pride in keeping up to date with the latest legislation and regulations
                                        changes for the benefit of our clients within the property industry.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <img className="img-fluid"
                                     src="https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                     alt="..."/>

                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Legal</div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">Quoins legal
                                        experts work alongside our management department therefore ensuring that
                                        you receive an integrated support package from our team.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <img className="img-fluid"
                                         src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                         alt="..."/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading font-weight-bold">Emergency Responce
                                    </div>
                                    <br/>
                                    <div className="portfolio-caption-subheading text-muted">Here at Quion
                                        management we understand that emergencies do happen, so we take it on
                                        board to offer 24 hour service for all emergencies.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactContainer/>

            <FormContainer
                subText='Were here to help'
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">What is the best
                                email for you?</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Post
                                Code:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Bulding
                                number:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>

                        <div className="mb-3">
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>What type of building is
                                    it?</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>House</option>
                                    <option>Flat</option>
                                    <option>Bungalow</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"/>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Send message</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default Home;
