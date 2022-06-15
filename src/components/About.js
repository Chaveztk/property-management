import React from 'react';
import Header from '../components/containers/Header.js'


class About extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>


                <Header
                    title='About Us'
                />


                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">

                            <div className="col-md-6">

                                <h1 className="display-5 fw-bolder">Who we are</h1>
                                <div className="fs-5 mb-5">
                                </div>
                                <div className='lead'>
                                    <p>Our experts at Quoin Management have been providing professional estate
                                        management services all over the UK since 2008.</p>
                                    <br/>

                                    <p>First starting in London and then expanding widely across the UK, we at Quoin
                                        management have now become an online management company increasing the value we
                                        bring for our clients across the UK. </p>
                                    <br/>
                                    <p>One of Quoin Managements core principles is ensuring you have peace of mind. This
                                        core principle is achieved by the personal touch that all our clients
                                        receive.</p>
                                </div>
                            </div>
                            <img style={{height: '500px', width: '500px'}}
                                 src="https://picsum.photos/id/1/500/500"
                                 alt="..." className='img-fluid'/>
                        </div>
                    </div>
                </section>


                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Head Management Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle"
                                         src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg"
                                         alt="..."/>
                                    <h4>Michael Chen</h4>
                                    <p className="text-muted">Residential Manager</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle"
                                         src="https://i.pravatar.cc/300?img=8"
                                         alt="..."/>
                                    <h4>Harry Wilson</h4>
                                    <p className="text-muted">Commercial Manager</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle"
                                         src="https://i.pravatar.cc/300?img=5"
                                         alt="..."/>
                                    <h4>Jennifer Rose</h4>
                                    <p className="text-muted">Property Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}


export default About;
