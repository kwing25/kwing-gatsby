import React from "react";

export default function ProjectPreviewCardGrid(props) {

    return (
        <div>
            <h1>Project Cards</h1>

            {/* Snippet */}
            <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                    {/* Blog post */}
                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <a className="relative block group" href="/blog">
                            <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true" />
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg" width={540} height={303} alt="Blog post" />
                            </figure>
                        </a>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="/blog">Product</a>
                                        </li>
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="/about">Engineering</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                    <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="/">Designing a functional workflow at home.</a>
                                </h3>
                            </header>
                            <p className="text-lg text-gray-400 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                            <footer className="flex items-center mt-4">
                                <a href="#0">
                                    <img className="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width={40} height={40} alt="Author 04" />
                                </a>
                                <div>
                                    <a className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Chris Solerieu</a>
                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500">Jan 19, 2020</span>
                                </div>
                            </footer>
                        </div>
                    </article>
                </div>
            </section>


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