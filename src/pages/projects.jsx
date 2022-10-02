import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import ProjectPreviewCardGrid from "../components/projects/project-preview-card-grid";

const ProjectsPage = props => {

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

            <div id="projects-page" className="h-screen">
                <header className="text-center pt-10">
                    <h1 id="title-page">Projects</h1>
                </header>

                <div className="container mx-auto py-4 px-5">
                    <ProjectPreviewCardGrid />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectsPage;