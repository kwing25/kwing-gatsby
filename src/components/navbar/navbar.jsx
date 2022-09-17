import React from "react";
//import { useState } from "react";
//import { Link } from "gatsby";
//import styled from "styled-components";


function NavBar() {

    return (
        <>
            <nav id="full-nav" className="navbar ">

                <div id="full-width-nav">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex flex-wrap space-x-10">
                            <li className="nav-item hover:text-[#ff006e] transform hover:scale-125 duration-300 ease-in-out">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item hover:text-[#ff006e] transform hover:scale-125 duration-300 ease-in-out">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item hover:text-[#ff006e] transform hover:scale-125 duration-300 ease-in-out">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>

                        </ul>
                    </div>
                </div>


            </nav>



        </>
    );
}

export default NavBar;