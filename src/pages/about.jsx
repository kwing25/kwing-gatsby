import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import NavBar from "../components/navbar/navbar";

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
                    <h1 className="bold">About Me</h1>
                </header>


            </div>
        </div>
    );
};

export default AboutPage;