import React from 'react';
import Header from '../../components/containers/Header.js'
import ServiceContainer from "../containers/ServiceContainer";


class CommercialManagement extends React.Component {

    render() {
        return (
            <>
                <Header
                    title='Commercial Management'
                    subheading='No matter the size of your commercial property large or small, its important to Quoin that you feel confident that your property is under full control.'
                />

                <ServiceContainer
                    title="Big or small we have a list of properties under management."
                    image="https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                ><p>Our commercial services to landlords include a variety ranging from shops, industrial units to
                    mixed-used properties.
                    <br/>
                    Quoin Management understands that dealing with issues such as rent arrears and tenants failing to
                    meet the lease agreement in place can be challenging. With Quoin Managements experienced commercial
                    property team we are confident in giving the best advice to our clients on how to deal with these
                    issues at hand.<br/><br/>
                    We stay on top of our timed scheduled visits and general maintenance to make sure all problems as
                    well as building issues can be dealt with efficiently at a lower cost.
                    We understand that every client has different needs. That is what makes the service here at Quoin
                    successful because we work round the clock to enable the satisfaction of our clients.
                </p></ServiceContainer>


                <ServiceContainer
                    isReverse={true}
                    title="Our commercial property management service includes:"
                    image="https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                >
                    <ul>
                        <li>Everyday repairs and maintenance</li>
                        <li>Half yearly property inspections</li>
                        <li>Serving of relevant notices</li>
                        <li>General health and safety checks</li>
                        <li>Financial services</li>
                        <li>Leasehold enquiries and lease interpretations</li>
                    </ul>
                </ServiceContainer>
            </>
        )
    }
}


export default CommercialManagement;
