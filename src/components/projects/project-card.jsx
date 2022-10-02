import React from "react";

export default function ProjectCard() {

    return (
        <div>

            <section className=" bg-[#ff006e] dark:bg-[#ff006e]/90 rounded-md my-20">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 shadow-2xl shadow-[#700548]" src="https://github.com/kwing25/Portfolio/blob/main/src/pages/Portfolio/Projects/demo%20pics/womenintechprojectdemopic.png?raw=true" alt="project cover" />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="block mt-4 text-2xl font-bold text-[#fef8fc] md:text-3xl">
                                Women in Tech API & App
                            </p>
                            <p className="mt-3 text-sm text-gray-300 md:text-sm">
                                Open source API & React App of the History of Female Tech Pioneers & Women in the field today
                            </p>
                            <div className="flex items-center mt-6">
                                <button type="button" className="text-white shadow-2xl bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md sm:text-sm px-1.5 py-2 sm:px-5 sm:py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 transform hover:scale-105 duration-300 ease-in-out">
                                    <a href="https://github.com/kwing25/Women-Who-ve-Changed-Tech" rel="noreferrer" target="_blank" className="flex">GitHub Repo
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github ml-2 sm:ml-1 w-7 h-7 sm:w-5 sm:h-5" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </button>
                                <button type="button" className="text-white shadow-2xl shadow-[#700548]/70 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md sm:text-sm px-1.5 py-2 sm:px-5 sm:py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 transform hover:scale-105 duration-300 ease-in-out">
                                    <a href="https://women-who-changed-tech.netlify.app/" rel="noreferrer" target="_blank" className="flex">Live Site
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 sm:ml-1 w-7 h-7 sm:w-5 sm:h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            <div className="flex flex-col mt-3 md:mt-6 p-3">
                                <h2 id="tech-used-pro-card" className="text-lg text-[#fef8fc] semibold pb-5">Technologies Used:</h2>
                                <div className="flex flex-wrap justify-start">

                                    <svg className="px-2 fill-current h-6 hover:text-[#60dafb] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>React</title>
                                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#cf649a] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>Sass</title>
                                        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z" />
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#fcdc03] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>JavaScript</title>
                                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#38BDF8] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>TailwindCSS</title>
                                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#ff006e] dark:bg-[#ff006e]/90 rounded-md my-20">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 shadow-2xl shadow-[#700548]" src="https://raw.githubusercontent.com/kwing25/Portfolio/main/src/pages/Portfolio/Projects/demo%20pics/5OClockDrinkGeneratorAppHomeScreenshot.png" alt="project cover" />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="block mt-4 text-2xl font-bold text-[#fef8fc] md:text-3xl">
                                5 O'Clock Drink Generator
                            </p>
                            <p className="mt-3 text-sm text-gray-300 md:text-sm">
                                Cocktail & Mixed Drink Generator. Users can search & save they're favorite drinks.
                            </p>
                            <div className="flex items-center mt-6">
                                <button type="button" className="text-white shadow-2xl bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md sm:text-sm px-1.5 py-2 sm:px-5 sm:py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2  transform hover:scale-105 duration-300 ease-in-out">
                                    <a href="https://github.com/kwing25/5-0-Clock-Drink-Generator" rel="noreferrer" target="_blank" className="flex">GitHub Repo
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github ml-2 sm:ml-1 w-7 h-7 sm:w-5 sm:h-5" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </button>
                                <button type="button" className="text-white shadow-2xl shadow-[#700548]/70 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md sm:text-sm px-1.5 py-2 sm:px-5 sm:py-2.5 text-center inline-flex w-fit items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 transform hover:scale-105 duration-300 ease-in-out">
                                    <a href="http://5-0-clock-drink-generator.vercel.app/" rel="noreferrer" target="_blank" className="flex">Live Site
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 sm:ml-1 w-7 h-7 sm:w-5 sm:h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            <div className="flex flex-col mt-3 md:mt-6 p-3">
                                <h2 id="tech-used-pro-card" className="text-lg text-[#fef8fc] semibold pb-5">Technologies Used:</h2>
                                <div className="flex flex-wrap justify-start">
                                    <svg className="px-2 fill-current h-6 hover:text-[#fcdc03] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>JavaScript</title>
                                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#594c41] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>Handlebars.js</title>
                                        <path d="M9.1 4.948a3.45 3.45 0 0 0-.398.014C6.32 5.15 5.373 6.375 4.802 6.9c-.572.525-1.656 1.763-2.376 1.545-.721-.217-.924-1.107-.67-1.381s.454-.225.613 0c.097.18.145.383.14.587a1.36 1.36 0 0 0 .438-.665.792.792 0 0 0-.443-1.017c-1.3-.659-2.139.514-2.26.787-.122.273-.336.707-.2 1.695.135.989.612 1.902 2.104 2.261a6.31 6.31 0 0 0 4.238-.495l4.41-1.84a5.408 5.408 0 0 1 .556-.101v9.864c0 .506.316.913.708.913.391 0 .707-.407.707-.913V8.29a5.408 5.408 0 0 1 .437.088l4.41 1.84a6.31 6.31 0 0 0 4.238.494c1.492-.36 1.969-1.272 2.105-2.26.135-.989-.08-1.423-.2-1.696-.122-.273-.962-1.446-2.261-.787a.792.792 0 0 0-.443 1.017c.076.26.229.492.437.665a1.19 1.19 0 0 1 .141-.587c.159-.225.359-.274.613 0s.051 1.164-.67 1.382c-.72.217-1.804-1.02-2.376-1.546-.571-.525-1.518-1.75-3.9-1.938A3.45 3.45 0 0 0 12 6.653a3.45 3.45 0 0 0-2.9-1.705zm12.39 2.703v.004l.006.002c-.002-.002-.004-.004-.006-.004zm-18.98 0c-.002.002-.004.004-.006.004l.006-.001V7.65z" />
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#e34c27] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>HTML5</title>
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#2A65F1] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>CSS3</title>
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                                    </svg>
                                    <svg className="px-2 fill-current h-6 hover:text-[#8312FA] shadow-2xl transform hover:scale-125 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                                        <title>Bootstrap</title>
                                        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}