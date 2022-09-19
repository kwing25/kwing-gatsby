import React from "react";
import "./about.scss";

export default function AboutDetailed() {

    return (
        <div id="about" className="inline-flex">

            <div className="flex items-center justify-center mb-20">
                <h1 className="text-4xl font-bold text-center">Objecive:</h1>
                <div className="p-10">
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I'm a Full Stack Web Developer & Advocate with a passion for development and advocating for purposeful technologies.</h1>
                    </div>
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I have experience in both web development & computer networking, and I ❤️ spending my time in these industries.</h1>
                    </div>
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I love open source and writing & contributing to the online dev community.</h1>
                    </div>
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I believe in collaboration and advocacy in the development community can make substantial impacts in the global world.</h1>
                    </div>
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I'm excited to be a part of & use my skills in the next phase of the web. ✨</h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mb-20">
                <h1 className="text-4xl font-bold text-center">Personal/Life outside of Coding:</h1>
                <div className="p-10">
                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">When I'm not coding I work in my hometown (Aurora, CO) History Museum.</h1>
                    </div>

                    <div className="px-4 py-6">
                        <h1 className="text-lg md:text-2xl">I love Comic Books & Various Pop Culture 🤓</h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mb-20">
                <h1 className="text-4xl font-bold text-center">My Goals...</h1>
                <div className="p-10">
                    <div className="px-4 py-6">
                        <ul className="text-lg md:text-2xl">
                            <li>Develop more!</li>
                            <li>Write more!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mb-20">
                <h1 className="text-4xl font-bold text-center">Good Sites & Developers that inspire me...</h1>
                <div className="p-10">
                    <div className="px-4 py-6">
                        <ul className="text-lg md:text-2xl">
                            <li>John Doe</li>
                            <li>example.com</li>
                        </ul>
                    </div>
                    <div className="px-4 py-6">
                        <ul className="text-lg md:text-2xl">
                            <li>Jane Doe</li>
                            <li>doeweb.com</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}
