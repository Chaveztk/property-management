import React from 'react';
import ContactContainer from '../components/containers/ContactContainer.js'
import Header from '../components/containers/Header.js'


class About extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div>





      <Header
        title='About Us'
       />



       <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">

                    <div class="col-md-6">

                        <h1 class="display-5 fw-bolder">Who we are</h1>
                        <div class="fs-5 mb-5">
                        </div>
                        <div class='lead'>
                          <p>Our experts at Quoin Management have been providing professional estate management services all over the UK since 2008.</p>
                          <br />

                          <p>First starting in London and then expanding widely across the UK, we at Quoin management have now become an online management company increasing the value we bring for our clients across the UK.    </p>
                          <br />
                          <p>One of Quoin Managements core principles is ensuring you have peace of mind. This core principle is achieved by the personal touch that all our clients receive.</p>
                        </div>
                    </div>
                    <img  style={{height: '500px', width:'500px'}} src="https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                </div>
            </div>
        </section>


      <section class="page-section bg-light" id="team">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Head Management Team</h2>
            <h3 class="section-subheading text-muted"></h3>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg" alt="..." />
                    <h4>Michael Chen</h4>
                    <p class="text-muted">Residential Manager</p>
                    {/*<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin-in"></i></a>*/}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?cs=srgb&dl=pexels-mentatdgt-1138903.jpg&fm=jpg" alt="..." />
                    <h4>Harry Wilson</h4>
                    <p class="text-muted">Commercial Manager</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?cs=srgb&dl=pexels-rodnae-productions-7468194.jpg&fm=jpg" alt="..." />
                    <h4>Jennifer Rose</h4>
                    <p class="text-muted">Property Manager</p>
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
