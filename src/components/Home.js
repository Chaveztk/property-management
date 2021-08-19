import React from 'react';
import HomeCards from '../components/containers/HomeCards.js';
import Header from '../components/containers/Header.js';
import FormContainer from '../components/containers/FormContainer.js';
import ContactContainer from '../components/containers/ContactContainer.js';
import { Link, withRouter } from 'react-router-dom';


class Home extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

      // const homeCard = HomeCards.Map(data =>
      //   <div class="col-lg-4 col-sm-6 mb-4">
      //       <div class="portfolio-item">
      //           <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
      //               <div class="portfolio-hover">
      //                   <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
      //               </div>
      //               <img class="img-fluid" src={data.imageUrl} alt="..." />
      //           </a>
      //           <div class="portfolio-caption">
      //               <div class="portfolio-caption-heading">{data.title}</div>
      //               <br />
      //               <div class="portfolio-caption-subheading text-muted">{data.text}</div>
      //           </div>
      //       </div>
      //   </div>
      // )

    return(
      <div>


      <Header
        title='Quoin Property Management'
       />

      <section class="page-section bg-light" id="portfolio">
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading">  It is Quoin Estate mission to help our clients from investment companies<br />
            to home owners across a vareity of buildings, from large blocks<br />
            of flats to converted terraced properties. The servies we offer are <br />
            highly valued to all our clients, tenants and landlords.</h3>
      </div>
      <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">

                      <div class="">

                      </div>
                      <Link to='/residentialmanagement'>
                        <img class="img-fluid" src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                      </Link>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Residential Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Its within the Quoin Management teams care that our clients premises remains maintained to a high rated standard for the safe secuirty of residents.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                    <Link to='/commercialmanagement'>
                      <img class="img-fluid" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                    </Link>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Commercial Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Quoin commercial department endeavor to make sure that our clients reach maximum potential using a personalised tailored plan specially designed by our team of experts.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                    <Link to='/propertymanagement'>
                      <img class="img-fluid" src="https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7031622.jpg&fm=jpg" alt="..." />
                    </Link>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Property Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">We stand by our policy for the peace of our clients, working together with all parties to know the building in-depth, ensuring all aspects of the building are covered.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">

                      <img class="img-fluid" src="https://images.pexels.com/photos/940829/pexels-photo-940829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Compliance Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Its within the Quoin Management teams care that our clients premises remains maintained to a high rated standard for the safe secuirty of residents.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                      <img class="img-fluid" src="https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Legal</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Quoin commercial department endeavor to make sure that our clients reach maximum potential using a personalised tailored plan specially designed by our team of experts.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                      <img class="img-fluid" src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                  </a>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading">Property Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">We stand by our policy for the peace of our clients, working together with all parties to know the building in-depth, ensuring all aspects of the building are covered.</div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</section>




<header class="bg-dark py-5 bg-image-full">
  <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                  <h1 class="display-5 fw-bolder text-white mb-2">Why Quoin Management?</h1>
                  <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"></div>
              </div>
          </div>
      </div>
  </div>
</header>


<ContactContainer />


<FormContainer
subText='Tell us your requirements'
/>




      </div>
    )
  }
}



export default Home;
