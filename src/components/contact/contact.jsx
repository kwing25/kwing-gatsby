import React from "react";
import "./contact.scss";

export default function ContactComponent() {

    return (
        <div id="contact">

            <div id="contact-form">

                <div className="flex items-center justify-center bg-[#ff006e]/20">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Contact Me</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Send me a message or follow me on my social platforms 🤝</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-500">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-500">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-500">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    {/* <button className="flex mx-auto text-[#fef8fc] bg-[#ff006e] border-0 py-2 px-8 focus:outline-none hover:bg-[#fef8fc] hover:text-[#ff006e] rounded text-lg">Send</button> */}
                                    <button>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <p className="leading-normal my-5 text-[#ff006e] "><a className="hover:text-[#fef8fc]" href="mailto:kendrawingpro@icloud.com">kendrawingpro@icloud.com</a>
                                    </p>

                                    <span id="social-links" className="inline-flex space-between pt-5">

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://linkedin.com/in/kendrawing" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://github.com/kwing25" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://dev.to/kwing25" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://codepen.io/kwing25" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z" />
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.twitch.tv/experiencelifeincode" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"></path>
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://discord.com/invite/vUudS7QPXn" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                                            </svg>
                                        </a>

                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.youtube.com/channel/UCyGYbospRfcAThEJoDve05A" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                                            </svg>
                                        </a>


                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://codesandbox.io/u/kwing25" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"></path>
                                            </svg>
                                        </a>


                                        <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/kennyk1995" rel="noreferrer" target="_blank">
                                            <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                            </svg>
                                        </a>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}