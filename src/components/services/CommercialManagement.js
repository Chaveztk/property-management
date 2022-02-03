import React from 'react';
import Header from '../../components/containers/Header.js'


class CommercialManagement extends React.Component{
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <Header
          title='Commercial Management'
          subheading='No matter the size of your commercial property large or small, its important to Quoin that you feel confident that your property is under full control.'
        />


        <section class="bg-light">
                <div class="container-fluid px-5">
                    <div class="row gx-5 px-5 align-items-center justify-content-center">
                        <div class="col-12 col-lg-5">
                        <h2 class=" lh-1 mb-5 fw-bolder">Big or small we have a list of properties under management.</h2>
                        <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                        <p>Our commercial services to landlords include a variety ranging from shops, industrial units to mixed-used   properties.
                          <br/>
                          Quoin Management understands that dealing with issues such as rent arrears and tenants failing to meet the lease agreement in place can be challenging. With Quoin Managements experienced commercial property team we are confident in giving the best advice to our clients on how to deal with these issues at hand.<br/><br/>
                          We stay on top of our timed scheduled visits and general maintenance to make sure all problems as well as building issues can be dealt with efficiently at a lower cost.
                          We understand that every client has different needs. That is what makes the service here at Quoin successful because we work round the clock to enable the satisfaction of our clients.
                        </p>
                        </div>
                        </div>
                        <div class="col-sm-8 ml-auto mt-5 col-md-6">
                            {/*<div class="px-5 ml-5 mt-5 px-sm-0">*/}
                              <img style={{height: '300px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                        </div>
                    </div>
                </div>
            </section>




            <section class="bg-light">
                    <div class="container-fluid px-5">
                        <div class="row gx-5 px-5 align-items-center justify-content-center">
                        <div class="col-sm-8 mr-auto mt-5 col-md-6">
                            {/*<div class="px-5 ml-5 mt-5 px-sm-0">*/}
                              <img style={{height: '300px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                        </div>
                            <div class="col-12 col-lg-5">
                            <h2 class=" lh-1 mb-5 fw-bolder">Our commercial property management service includes:</h2>
                            <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                            <ul>
                              <li>Everyday repairs and maintenance</li>
                              <li>Half yearly property inspections</li>
                              <li>Serving of relevant notices</li>
                              <li>General health and safety checks</li>
                              <li>Financial services</li>
                              <li>Leasehold enquiries and lease interpretations</li>


                            </ul>
                            </div>
                            </div>

                        </div>
                    </div>
                </section>



      </div>
    )
  }
}




export default CommercialManagement;
