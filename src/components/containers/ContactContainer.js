import React from 'react';
import Google from './GoogleContainer.js';




function ContactContainer() {
  return(

    <div>


    <section class="bg-light">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <h2 class="display-6 lh-1 mb-4 fw-bolder">Where we Operate</h2>
                    <div class="col-12 col-lg-5">
                    <p class='lead'><br />The strength of our company is in that we're an online run management company, this has given us the ability to communicate with our clientle more effectively across the UK.
                    <br />
                    Our team work 24/7 ensuring our clients can rest assured that their property is in safe hands. As a new customer, our team at Quoin management would be glad to answer any of your requests. Please use the form below or send us an email to get in touch.</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <Google />
                    </div>
                </div>
            </div>
        </section>

        </div>



  )
}



export default ContactContainer;
