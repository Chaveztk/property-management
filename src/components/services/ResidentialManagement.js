import React from 'react';
import Header from '../../components/containers/Header.js';
import ServiceContainer from "../containers/ServiceContainer";


class ResidentialManagement extends React.Component {

    render() {
        return (
            <>
                <Header
                    title='Residential Management'
                    subheading='We understand that renting out a residential property can be overwhelming....'
                />
                <ServiceContainer
                    title="Quoin residential management For Your Property Needs"
                    image="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?cs=srgb&dl=pexels-terry-magallanes-2631746.jpg&fm=jpg"
                >
                    <>
                        <p>As one of online's most diverse professional serviced property management
                            companies, we pride ourselves in the value we bring towards clients as well as
                            tenants. The loyalty built with our tenants brings longer term tenancies which
                            is beneficial towards maximising our clients return on investments.</p>
                        <br/>
                        <p>
                            No matter the condition of the property we are confident Quoin Management can
                            help. From refurbishment to meeting legal guidlines Quoin will have you covered.

                            We understand that there can be issues that can arise, but with our local teams
                            and contractors we do regular property checks to avoid many costly maintenance
                            issues. Quoin Emergency teams are available 24 hours a day for the general
                            safety of our clients and tenants.
                            <br/>
                            <br/>
                            We send our clients catered statements that shows where and when rent was
                            collected and fixtures/replacements to the property keeping clients updated to
                            have a full hands-off experience.</p>
                    </>
                </ServiceContainer>
                <ServiceContainer
                    isReverse={true}
                    title="Our Residential Management Services"
                    image="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?cs=srgb&dl=pexels-mark-mccammon-2724748.jpg&fm=jpg"
                >
                    <>
                        <p>Clients know our Residential management team strives to ensure that clients
                            properties are looked after as if it was their own. Our regular supervision of
                            the property keeps your building to its highest standard which enables current
                            tenants to feel secure.</p>
                        <br/>
                        <div>Our services include:
                            <ul>
                                <li>Single let</li>
                                <li>HMO</li>
                                <li>End of tenancy cleaning</li>
                                <li>Refurbishment</li>

                            </ul>
                        </div>
                    </>
                </ServiceContainer>
            </>
        )
    }
}


export default ResidentialManagement
