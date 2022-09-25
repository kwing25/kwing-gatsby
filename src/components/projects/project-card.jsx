import React from "react";

export default function ProjectCard(props) {

    return (
        <div>
            <h1>Project Cards</h1>

            <div className="flex items-center justify-center px-5 md:px-2 ">
                    <div className="col">
                        <div id="work-container">
                            <img id="womentech-demo" src="https://github.com/kwing25/Portfolio/blob/main/src/pages/Portfolio/Projects/demo%20pics/womenintechprojectdemopic.png?raw=true" alt="women-in-tech-demo" />
                            <div className="overlay" />
                            <h2 className="title">Women in Tech API & App</h2>
                            <p className="sub"><span className="tech-used"><i class="fas fa-laptop-code"></i>Tech Used: </span> React, Sass, REST APIs</p>
                            <div className="button">
                                <a href="https://women-who-changed-tech.netlify.app/" rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt ">Live</i></a>
                                <a href="https://github.com/kwing25/Women-Who-ve-Changed-Tech" rel="noreferrer" target="_blank"><i className="fab fa-github">Repo</i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div id="work-container">
                            <img id="drink-demo" src="https://raw.githubusercontent.com/kwing25/Portfolio/main/src/pages/Portfolio/Projects/demo%20pics/5OClockDrinkGeneratorAppHomeScreenshot.png" alt="drink-generator-app-demo" />
                            <div className="overlay" />
                            <h2 className="title">5 O'Clock Drink Generator</h2>
                            <p className="sub"><span className="tech-used"><i class="fas fa-laptop-code"></i>Tech Used: </span> HTML/CSS, Handlebars, CocktailDB</p>
                            <div className="button">
                                <a href="http://5-0-clock-drink-generator.vercel.app/" rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt">Live</i></a>
                                <a href="https://github.com/kwing25/5-0-Clock-Drink-Generator" rel="noreferrer" target="_blank"><i className="fab fa-github">Repo</i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div id="work-container">
                            <img src="https://raw.githubusercontent.com/kwing25/Portfolio/main/src/pages/Portfolio/Projects/demo%20pics/PhotoDropAppHomeScreenshot.png" alt="drop-app-demo" />
                            <div className="overlay" />
                            <h2 className="title">Photo Drop</h2>
                            <p className="sub"><span className="tech-used"><i class="fas fa-laptop-code"></i>Tech Used: </span> React, Cloudinary, MERN</p>
                            <div className="button">
                                <a href="https://photo-drop2.herokuapp.com/" rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt">Live</i></a>
                                <a href="https://github.com/kwing25/Photo-Drop" rel="noreferrer" target="_blank"><i className="fab fa-github">Repo</i></a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}