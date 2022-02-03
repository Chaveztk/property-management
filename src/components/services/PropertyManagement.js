import React from 'react';
import Header from '../../components/containers/Header.js';


class PropertyManagement extends React.Component{
  constructor() {
    super()
  }
  render() {
    return(
      <div>
      <Header
        title='Property Management'
        subheading='Quoin Management are highly experienced service providers for blocks of flats, properties and estates.'
      />



      <section class="bg-light">
              <div class="container-fluid px-5 my-5">
                  <div class="row gx-5 px-5 align-items-center justify-content-center">
                      <div class="col-12 col-lg-5">
                      <h2 class=" lh-1 mb-5 fw-bolder">Big or small we have a list of properties under management.</h2>
                      <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                      <p>When it come to our property block management or the management of our clients units, we specialise in having all managed sites to be customised to suit their individual needs.  Quion management has grown successfully over the years with our key knowledge in property and experience in learning to adopt and adapt through the personal growth between ourselves and our clients.
                      We pay close attention to detail making sure you are always kept updated with all legislation and changes that can affect you and your property assests.</p>
                      <br />
                      <p>
                      We have a detailed understanding of the complex laws that can affect property owners and as a firm of Chartered Surveyors, we have the additional benefit of understanding the technical issues involved in building construction and property maintenance.</p>
                      </div>
                      </div>
                      <div class="col-sm-8 ml-auto mt-5 col-md-6">

                            <img style={{height: '300px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                      </div>
                  </div>
              </div>
          </section>




          <section class="bg-light">
                  <div class="container-fluid px-5">
                      <div class="row gx-5 px-5 align-items-center justify-content-center">
                      <div class="col-sm-8 mr-auto mt-5 col-md-6">

                            <img style={{height: '300px', width:'500px'}} class="img-fluid rounded" src="https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                      </div>
                          <div class="col-12 col-lg-5">
                          <h2 class=" lh-1 mb-5 fw-bolder">Our property and block management service includes:</h2>
                          <div class=' fw-normal text-muted mb-5 mb-lg-0'>
                          <ul>
                            <li>Day to day management of programmed and reactive maintenance</li>
                            <li>On-site caretakers</li>
                            <li>Collection of service charges and ground rents</li>
                            <li>Preparation of annual income and expenditure accounts</li>
                            <li>Manage and maintain a ‘ring fenced’ client account</li>
                            <li>Retain accounts records in line with the RICS Service Charge Residential Management Code (3rd Edition)</li>
                            <li>Dealing with leasehold enquiries and lease interpretations</li>
                            {/*<li>Dispute resolutions</li>*/}
                            <li>Project management on major works</li>
                            <li>Section 20 consultations and project management</li>
                            <li>Arrange for Fire and Health and Safety inspections and compliance</li>
                            <li>Carrying out quarterly property inspections</li>
                            <li>Assisting with the ‘Right to Manage’ process and collective enfranchisement</li>
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


export default PropertyManagement;
