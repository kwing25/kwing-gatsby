import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import AboutDetailed from "../components/about/about-detailed";
import Skills from "../components/skills/skills";

const AboutPage = props => {
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

            <div id="about-page">
                <header className="text-center pt-10">
                    <h1 id="title-page">About Me</h1>
                </header>

                <div>
                    <AboutDetailed />
                </div>

                <div>
                    <Skills />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;