import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import ProjectPreviewCardGrid from "../components/projects/project-preview-card-grid";
import ProjectSandboxes from "../components/projects/project-sandboxes";

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

                <div className="p-10">
                    <ProjectSandboxes />
                </div>

                <Footer />
            </div>

   
        </div>
    );
};

export default ProjectsPage;