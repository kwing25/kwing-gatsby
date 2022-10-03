import React from "react";
import {
    motion
} from "framer-motion";
import "./about.scss";

export default function AboutDetailed() {
    return (
        <div id="about" className="flex flex-wrap px-20">

            <div className="flex flex-col items-center justify-center mb-20">
                <div className="p-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                    >
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
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
