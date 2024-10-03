import { Divz } from "divz";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing FontAwesome icons
import "./App.css";
import { teamList } from "./constant/Teams";

interface Team {
    name: string;
    title: string;
    image: string;
    social: {
        linked: string; // Ensure this matches what you have in teamList
        github: string;
    };
}

function App() {
    const [teams, setTeams] = useState<Team[]>(teamList); // Use Team[] instead of Team[] | null

    useEffect(() => {
        setTeams(teamList);
    }, []);
    return (
        <div className={`app`}>
            <div className="app-header">
                <h1>Our Web Operations Team</h1>
                <small>You can Follow us on our socials</small>
            </div>

            <Demo4 teams={teams} />
        </div>
    );
}

// Update the Demo4 component to receive teams correctly
function Demo4({ teams }: { teams: Team[] }) {
    return (
        <Divz className="demo4" isAutoPlayLooped={true} autoPlayDuration={2000}>
            {teams.map((member, index) => (
                <figure key={index}>
                    <img src={member.image} alt={`${member.name} profile`} />
                    <figcaption>
                        <div>{(index + 1).toString().padStart(2, "0")}</div>
                        <div>{member.name}</div>
                        <div>{member.title}</div>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <a
                                href={member.social.linked}
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
