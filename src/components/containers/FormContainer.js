import React from 'react';



function FormContainer(props) {
  return(
    <form class="column is-half" onSubmit={props.handleSubmit} method={props.method} action={props.action}>
    <section class="page-section" id="contact">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">{props.subText}</h3>
        </div>
        <form id="contactForm">
            <div class="row align-items-stretch mb-5">
                <div class="col-md-6">
                    <div class="form-group">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="Your Name *"
                        data-sb-validations="required"
                        onChange={props.handleChange}
                        value={props.name}
                        name='name'
                        required
                        />
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-group">
                        <input
                        class="form-control"
                        placeholder="Your Email *"
                        data-sb-validations="required,email"
                        name='email'
                        type="email"
                        value={props.email}
                        onChange={props.handleChange}
                        required
                        />
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-group mb-md-0">
                        <input
                        class="form-control"
                        placeholder="Your Phone *"
                        data-sb-validations="required"
                        type="number"
                        placeholder='Telephone'
                        onChange={props.handleChange}
                        name='telephone'
                        value={props.telephone}
                        />
                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea
                        class="form-control"
                        placeholder="Your Message *"
                        data-sb-validations="required"
                        type='text'
                        name='text'
                        placeholder='Enter Message'
                        onChange={props.handleChange}
                        value={props.text}
                        required
                        ></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                </div>
            </div>
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center text-white mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
            <div class="text-center">
              <button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button>
            </div>
        </form>
    </div>
</section>
</form>
  )
}



export default FormContainer;
