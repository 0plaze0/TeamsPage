import { Divz } from "divz";
import "./App.css";
import { teamList } from "./constant/Teams";
import { FaGlobe } from "react-icons/fa";

function App() {
    return (
        <div className={`app  dark-mode`}>
            <div className="app-header">
                <h1>Techcracy Web Teams</h1>
            </div>

            <Demo4 />
        </div>
    );
}

const demo4Images = teamList;

function Demo4() {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
    return (
        <>
            <img className="background" src="./demo4/bg.jpg" />

            <Divz className="demo4" autoPlay={true} isDarkMode={true}>
                {demo4Images.map((member, index) => (
                    <figure
                        key={index}
                        onClick={() => {
                            handleClick(member.social);
                        }}
                    >
                        <img src={member.image} />
                        <figcaption>
                            <div>{(index + 1).toString().padStart(2, "0")}</div>
                            <div>{member.name}</div>
                            <div>{member.title}</div>
                            <a href={member.social}>
                                <FaGlobe />
                            </a>
                        </figcaption>
                    </figure>
                ))}
            </Divz>
        </>
    );
}

export default App;
