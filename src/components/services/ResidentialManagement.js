import React from 'react';
import Header from '../../components/containers/Header.js';


class ResidentialManagement extends React.Component{
  constructor() {
    super()
  }
  render() {
    return(
      <div>
        <Header
          title='Residential Management'
          subheading='We understand that renting out a residential property can be overwhelming....'
        />


        <section class="bg-light">
                <div class="container-fluid px-5">
                    <div class="row gx-5 px-5 align-items-center justify-content-center">
                        <div class="col-12 col-lg-5">
                        <h2 class=" lh-1 mb-5 fw-bolder">Quoin residential management For Your Property Needs</h2>
                        <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                        <p>As one of online's most diverse professional serviced property management companies, we pride ourselves in the value we bring towards clients as well as tenants. The loyalty built with our tenants brings longer term tenancy which is beneficial towards maximising our clients return on investments.</p>
                        <br />
                        <p>
                        No matter the condition of the property we are confident Quoin Management can help. From refurbishment to meeting legal guidlines Quoin will have you covered.

                        We understand that there can be issues that can arise, but with our local team and contractors we do regular property checks to  avoid many costly maintenance issues. Quoin Emergency team are available 24hrs a day for the general safety of our clients and tenants.
                        <br/>
                        <br/>
                        We send our clients catered statements that shows where and when rent was collected and fixtures/replacements to the property keeping clients updated to have a full hands-off experience.</p>
                        </div>
                        </div>
                        <div class="col-sm-8 ml-auto mt-5 col-md-6">
                            <div class="px-5 ml-5 mt-5 px-sm-0">
                              <img style={{height: '500px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?cs=srgb&dl=pexels-terry-magallanes-2631746.jpg&fm=jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section class="bg-light">
                    <div class="container-fluid px-5">
                        <div class="row gx-5 px-5 align-items-center justify-content-center">
                        <div class="col-sm-8 mr-auto mt-5 col-md-6">
                            <div class="px-5 ml-5 mt-5 px-sm-0">
                              <img style={{height: '500px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?cs=srgb&dl=pexels-mark-mccammon-2724748.jpg&fm=jpg" alt="..." />
                            </div>
                        </div>
                            <div class="col-12 col-lg-5">
                            <h2 class=" lh-1 mb-5 fw-bolder">Our Residential Management Services</h2>
                            <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                            <p>Clients know our Residential management team best for creating a bond with their property. Our regular overseen supervision of the property keeps your building to its highest standard which enables current tenants to feel secure.</p>
                            <br />
                            <p>Our services include:
                              <ul>
                                <li>Single let</li>
                                <li>HMO</li>
                                <li>End of tenancy cleaning</li>
                                <li>Refurbishment</li>

                              </ul>
                              </p>
                            </div>
                            </div>

                        </div>
                    </div>
                </section>



      </div>
    )
  }
}



export default ResidentialManagement
