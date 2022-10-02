import React from "react";
import "./projects.scss";

export default function ProjectSandboxes() {

    return (
        <div>

            <div className="portfolio__codepen">
                <h1 className="sub-head">Codepen's</h1>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full md:1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <iframe height={300} style={{ width: '100%' }} scrolling="no" title="Pure CSS Simple Rainbow Background Animation" src="https://codepen.io/kwing25/embed/porbVGr?default-tab=result" frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
                                    See the Pen &lt;a href="https://codepen.io/kwing25/pen/porbVGr"&gt;
                                    Pure CSS Simple Rainbow Background Animation&lt;/a&gt; by Kendra Wing (&lt;a href="https://codepen.io/kwing25"&gt;@kwing25&lt;/a&gt;)
                                    on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
                                </iframe>

                            </div>
                        </div>
                        <div className="p-4 w-full md:1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <iframe height={300} style={{ width: '100%' }} scrolling="no" title="Simple JS Local Storage List" src="https://codepen.io/kwing25/embed/zYdBjba?default-tab=result" frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
                                    See the Pen &lt;a href="https://codepen.io/kwing25/pen/zYdBjba"&gt;
                                    Simple JS Local Storage List&lt;/a&gt; by Kendra Wing (&lt;a href="https://codepen.io/kwing25"&gt;@kwing25&lt;/a&gt;)
                                    on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
                                </iframe>

                            </div>
                        </div>
                        <div className="p-4 w-full md:1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <iframe height={300} style={{ width: '100%' }} scrolling="no" title="GitHub API User Search Example App" src="https://codepen.io/kwing25/embed/WNdgopm?default-tab=result" frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
                                    See the Pen &lt;a href="https://codepen.io/kwing25/pen/WNdgopm"&gt;
                                    GitHub API User Search Example App&lt;/a&gt; by Kendra Wing (&lt;a href="https://codepen.io/kwing25"&gt;@kwing25&lt;/a&gt;)
                                    on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a className="inline-block rounded-full bg-transparent text-[#ff006e] hover:bg-[#ff006e] hover:text-white p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://codepen.io/kwing25">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="portfolio__codesandbox mt-10 pt-10">
                <h1 className="sub-head">Codesandbox's</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full  md:w-1/2">
                            <div id="codesandbox-item" className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <iframe src="https://codesandbox.io/embed/weather-dashboard-sfsxry?fontsize=14&hidenavigation=1&theme=dark&view=preview" style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }} title="Weather-Dashboard" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/2">
                            <div id="codesandbox-item" className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <iframe src="https://codesandbox.io/embed/women-whove-changed-tech-api-react-app-v3vowh?fontsize=14&hidenavigation=1&theme=dark&view=preview" style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }} title="Women Who've Changed Tech API & React App " allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a className="inline-block rounded-full bg-transparent text-[#ff006e] hover:bg-[#ff006e] hover:text-white p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://codesandbox.io/u/kwing25">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"></path>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}