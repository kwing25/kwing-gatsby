import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import ContactComponent from "../components/contact/contact";

const ContactPage = props => {

    const { errors } = props;
    if (errors) {
        return (
            <div>
                <GraphQLErrorList errors={errors} />
            </div>
        );
    }

    return (
        <div>

            <div>
                <NavBar />
            </div>

            <div id="contact-page" className="h-screen">

                <div className="container mx-auto py-20 px-5">
                    <ContactComponent />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;