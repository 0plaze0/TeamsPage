import { Divz } from "Divz";
import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing FontAwesome icons
import "./App.css";
import profile from "./assets/profile.png";
import krishna from "./assets/krishna.jpg";
import bgMusic from "./assets/bgMusic.mp3";

function App() {
    return (
        <div className={`app`}>
            <div className="app-header">
                <h1>Our Web Operations Team</h1>
                <small>You can Follow us on our socials</small>
            </div>

            {/* <audio autoPlay>
                <source src={bgMusic} type="audio/mpeg" />
            </audio> */}

            <Demo4 />
        </div>
    );
}

const demo3Assets = [
    {
        image: krishna,
        name: "Akash Banik",
        title: "Developer",
        social: {
            linkedin: "https://linkedin.com/in/akash-banik",
            github: "https://github.com/akash-banik",
        },
    },
    {
        image: krishna,
        name: "Akash Banik",
        title: "Developer",
        social: {
            linkedin: "https://linkedin.com/in/akash-banik",
            github: "https://github.com/akash-banik",
        },
    },
    {
        image: krishna,
        name: "Gyan Deep",
        title: "Developer",
        social: {
            linkedin: "https://linkedin.com/in/gyan-deep",
            github: "https://github.com/gyan-deep",
        },
    },
];

function Demo4() {
    return (
        <Divz className="demo4" isAutoPlayLooped={true} autoPlayDuration={2000}>
            {demo3Assets.map((member, index) => (
                <figure key={index}>
                    <img src={member.image} alt={`${member.name} profile`} />

                    <figcaption>
                        <div>{(index + 1).toString().padStart(2, "0")}</div>
                        <div>{member.name}</div>
                        <div>{member.title}</div>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={member.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </Divz>
    );
}

export default App;
