import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";


export default function ContactComponent() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h71kikp', 'template_9u7bpal', form.current, '9pggt0ubrNo46-cCu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact">

            <div id="contact-form" className="flex items-center justify-center">

            <div className="container">
                <div className="flex justify-center text-center mb-12">
                    <h1 id="contact-title" className="text-2xl">Contact Me</h1>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col flex-wrap ">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex py-4">
                                <div className="w-full">
                                    <label htmlFor="name" className="text-md">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="flex py-4">
                                <div className="w-full">
                                    <label htmlFor="email" className="text-md">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="flex py-4">
                                <div className="w-full">
                                    <label htmlFor="message" className="text-md">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="flex mx-auto text-white bg-[#ff006e] border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-[#ff006e] rounded text-lg">Send
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>

                                </button>
                            </div>
                        </form>

                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-500 text-center">
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

                                <a className="inline-block text-[#ff006e] hover:text-[#ff006e] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://codesandbox.io/u/kwing25" rel="noreferrer" target="_blank">
                                    <svg className="fill-current h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}