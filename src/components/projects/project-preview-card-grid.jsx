import React from "react";

export default function ProjectPreviewCardGrid(props) {

    return (
        <div id="projects">
            <h1>Some of my Projects...</h1>

            <div className="container">



            </div>


            <section className="p-4 lg:p-8 bg-[#ff006e]/60">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        {/* Image */}
                        <div className="w-2/5 transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div className="absolute inset-0 bg-black bg-opacity-80">
                                <img src="https://github.com/kwing25/Portfolio/blob/main/src/pages/Portfolio/Projects/demo%20pics/womenintechprojectdemopic.png?raw=true" alt="project" className="h-80 dark:bg-gray-500 aspect-video" />
                            </div>
                        </div>
                        {/* Project Info */}
                        <div className="flex flex-col justify-center p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold">Women in Tech API & App</h3>
                            <p className="my-6 dark:text-gray-400">Open source API & React App of the History of Female Tech Pioneers & Women in the field today.</p>
                            <div className="mb-3">
                                <ul className="flex flex-wrap text-xs font-medium -m-1">
                                    <h2 class="text-md text-gray-300 mb-2">Tech Used
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash w-4 h-4" viewBox="0 0 16 16">
                                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                        </svg>
                                    </h2>
                                    <li className="m-1">
                                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full" href="/blog">React </a>
                                    </li>
                                    <li className="m-1">
                                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="/about">Engineering</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    Project Details
                                    <svg className="ml-2 -mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                    GitHub Repo
                                </button>
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    Live Site
                                    <svg className="ml-2 -mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                        <img src="https://source.unsplash.com/640x480/?" alt="" />
                    </div>
                </div>
            </div>

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

        </div>
    )
}