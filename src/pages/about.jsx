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
                <header className="text-center">
                    <h1 id="title-page">About Me</h1>
                </header>

                <div>
                    <AboutDetailed />
                </div>
                
                <div>
                    <Skills />

                    {/* <div className="resume-link">
                        <a href="https://drive.google.com/file/d/125BPaRERRakn6SFBjMtzKYw8jtenRsyh/view?usp=sharing" rel="noreferrer" target="_blank"><img src="https://raw.githubusercontent.com/kwing25/Portfolio/821b5f26f82ff38814f0cfaaf07b77b488229236/src/assets/resumeicon.svg" alt="resume-icon" /></a>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;