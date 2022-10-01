import React from "react";

export default function ProjectCard(props) {

    return (
        <div>
            <h1>Project Cards</h1>

            {/* <div className="flex items-center justify-center px-5 md:px-2 ">
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
            </div> */}


            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://github.com/kwing25/Portfolio/blob/main/src/pages/Portfolio/Projects/demo%20pics/womenintechprojectdemopic.png?raw=true" alt="" />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                                Women in Tech API & App
                            </p>
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                Open source API & React App of the History of Female Tech Pioneers & Women in the field today
                            </p>
                            <div className="flex items-center mt-6">
                                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    <a href="https://women-who-changed-tech.netlify.app/" rel="noreferrer" target="_blank">Case Study
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </a>
                                </button>
                                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    <a href="https://women-who-changed-tech.netlify.app/" rel="noreferrer" target="_blank">Live Site
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </button>
                                <button type="button" className="inline-block rounded-full p-3 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none focus:ring">
                                    <a href="https://github.com/kwing25/Women-Who-ve-Changed-Tech" rel="noreferrer" target="_blank">
                                        <span className="sr-only">GitHub Repo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}