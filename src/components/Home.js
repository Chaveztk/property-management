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






<header>
  <div
          class="p-5 text-center bg-image opacity-75"
          style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/images/76.jpg)', height: '100vh'}}>


      <div class="d-flex align-items-center h-100">


      <div class="container">
        <div class="row">

          <div class="align-self-center px-4 text-center">
          <h1 class="fw-bolder">Quoin Estate Management</h1>
          {/*<p class="lead">A functional Bootstrap 5 boilerplate for one page scrolling websites</p>*/}


        </div>
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase"></h2>
                <h3 class="section-subheading">  It is Quoin Estates mission to help our clients from investment companies<br />
                  to home owners across a variety of buildings, from large blocks<br />
                  of flats to converted terraced properties. The services we offer are <br />
                  highly valued by all our clients, tenants and landlords.</h3>
            </div>
            </div>
          {/*<form class=" bg-primary rounded-3 p-4 p-sm-5 mt-5">
              <div class="col align-self-center">
                  <div class="mb-4 mb-xl-0">
                    <div class="fs-3 fw-bold text-white">New products, delivered to you.</div>
                    <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>
                  </div>
                  <div class="ms-xl-4">
                    <div class="input-group mb-2">
                      <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>
                      </div>
                    <div class="small text-white-50">We care about privacy, and will never share your data.</div>
                  </div>
              </div>
          </form>*/}
        </div>
      </div>
      </div>

  </div>
</header>


<form class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">What is the best email for you?</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Post Code:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Bulding number:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">What type of building is it?</label>
            <select id="" class="form-select">
            <option>Select</option>
              <option>House</option>
              <option>Flat</option>
              <option>Bungalow</option>
              <option>Other</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</form>

      <section class="page-section bg-light" id="portfolio">
  <div class="container">
      {/*<div class="text-center">
          <h2 class="section-heading text-uppercase"></h2>
          <h3 class="section-subheading">  It is Quoin Estates mission to help our clients from investment companies<br />
            to home owners across a variety of buildings, from large blocks<br />
            of flats to converted terraced properties. The services we offer are <br />
            highly valued by all our clients, tenants and landlords.</h3>
      </div>*/}
      <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">

                      <div class="">

                      </div>
                      <Link to='/residentialmanagement'>
                        <img class="img-fluid" src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                      </Link>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading fw-bold">Residential Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">It is within the Quoin Management teams care that our clients premises remain maintained to an excellent standard for the safe security of residents.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                    <Link to='/commercialmanagement'>
                      <img class="img-fluid" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
                    </Link>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading fw-bold">Commercial Management</div>
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
                      <div class="portfolio-caption-heading fw-bold">Property Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">We stand by our policy for the peace of our clients, working together with all parties to know the building in-depth, ensuring all aspects of the building are covered.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">

                      <img class="img-fluid" src="https://images.pexels.com/photos/940829/pexels-photo-940829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading fw-bold">Compliance Management</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">At Quoin we take pride in keeping up to date with the latest legislation and regulations changes for the benefit of our clients within the property industry.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                      <img class="img-fluid" src="https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />

                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading fw-bold">Legal</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Quoins legal experts work alongside our management department therefore ensuring that you receive an integrated support package from our team.</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                      <img class="img-fluid" src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                  </a>
                  <div class="portfolio-caption">
                      <div class="portfolio-caption-heading fw-bold">Emergency Responce</div>
                      <br />
                      <div class="portfolio-caption-subheading text-muted">Here at Quion management we understand that emergencies do happen, so we take it on board to offer 24 hour service for all emergencies.</div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</section>




{/*<div
        class="p-5 text-center bg-image"
        style={{backgroundColor: '#1F1F1F', height: '100vh'}}>
        <header class="text-white">
            <div class="container-fluid px-4 text-center">
                <h1 class="fw-bolder">Agent Details</h1>
                <p class="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non <br/> aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            </div>

        <div class="container">
          <div class="row">

            <div class="col-6 col-sm-3">
              <img class="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/250x350/343a40/6c757d" alt="..." />

            </div>
            <div class="col-md-6 offset-md-0">
            <h2 class="fw-bolder text-start">Growth &amp; beyond</h2>
              <p class="lead text-start mb-0">
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.
              </p>
              <br/>
              <p class="lead text-start mb-0">
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.
              </p>
            </div>

            <div class="col-6 col-sm-3">
              <ul class="list-group list-group-flush">
                <li class="">support@sitename.com</li>
                <hr/>
                <li class=""> www.sitename.com</li>
                <hr/>
                <li class="">+1 232 444 55 66</li>
                <hr/>
                <li class=""> facebook.com/tagline</li>
                <hr/>
                <li class="">twitter.com/tagline</li>
              </ul>
            </div>


          </div>
        </div>
        </header>
</div>*/}


<ContactContainer />

<FormContainer
subText='Were here to help'
handleChange={this.handleChange}
handleSubmit={this.handleSubmit}
{...this.state}
/>



      </div>
    )
  }
}



export default Home;
