import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SocialBar from "./Components/SocialBar";
import ResumeIcon from "./Images/resume.png";
import ContactIcon from "./Images/contact.png";
import ProgramIcon from "./Images/myava.png";
import Skills from "./Components/Skills";
import SocialMobile from "./Components/SocialBarMobile";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Certificates from "./Components/Certificates";
import NavMobile from "./Components/NavMobile";

function App() {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const GoToResume = () => {
        window.location.href =
            "https://drive.google.com/file/d/1sHdhi6rmqJN5u_2-QhNdzRCauwsC2Vwl/view?usp=sharing";
    };
    const [titletext, setTitleText] = useState("H");

    useEffect(() => {
        setTimeout(() => {
            setTitleText("Hi");
        }, 600);
        setTimeout(() => {
            setTitleText("Hi!");
        }, 800);
        setTimeout(() => {
            setTitleText("Hi! I");
        }, 1000);
        setTimeout(() => {
            setTitleText("Hi! I a");
        }, 1200);
        setTimeout(() => {
            setTitleText("Hi! I am");
        }, 1400);
        setTimeout(() => {
            setTitleText("Hi! I am I");
        }, 1600);
        setTimeout(() => {
            setTitleText("Hi! I am Ir");
        }, 1800);
        setTimeout(() => {
            setTitleText("Hi! I am Irr");
        }, 2000);
        setTimeout(() => {
            setTitleText("Hi! I am Irru");
        }, 2200);
        setTimeout(() => {
            setTitleText("Hi! I am Irr");
        }, 2400);
        setTimeout(() => {
            setTitleText("Hi! I am Ir");
        }, 2600);
        setTimeout(() => {
            setTitleText("Hi! I am Irb");
        }, 2800);
        setTimeout(() => {
            setTitleText("Hi! I am Irba");
        }, 3000);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3200);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3400);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3600);
    }, []);

    return (
        <div className="App">
            <SocialBar />
            <div className="Home" id="home">
                <NavBar scrollFunction={scrollToElement} />
                <NavMobile scrollFunction={scrollToElement} />
                <div className="homecon">
                    <div className="alltexts">
                        <div className="wintopcon">
                            <div className="closebtn"></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#fabf2f" }}
                            ></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#29cd3f" }}
                            ></div>
                        </div>
                        <p className="typewriter">
                            {titletext}
                            <span className="typewritercursor">|</span>
                        </p>
                        <p className="titledesc">
                            A recent Computer Science graduate with an MSc in Advanced Computer Science fromUniverdity of Leicester(completed
                            in September 2025).         <p>
                                Seeking junior or graduate roles to leverage skills in
                                Programming, Cloud Computing, Cybersecurity, Machine Learning, Reinforced Learning, IoT, Penetration Testing,
                                and Malware Analysis. Proficient in Python, C#, Java, and C++. Scored distinction in Bachelor’s and Master’s degree.                            <span className="swappingtext"></span>.
                                <span className="xp">3 Months</span> of work
                                experience ,Internship Training in Cybersecurity.
                            </p>
                        </p>
                        <div className="mainbtncon">
                            <button
                                className="mainbtn"
                                onClick={() => {
                                    scrollToElement("contact");
                                }}
                            >
                                <img
                                    src={ContactIcon}
                                    alt="Resume"
                                    style={{ width: "1.3rem" }}
                                />
                                Contact Me
                            </button>
                            <button className="mainbtn" onClick={GoToResume}>
                                <img
                                    src={ResumeIcon}
                                    alt="Resume"
                                    style={{ width: "1.3rem" }}
                                />
                                Resume
                            </button>
                        </div>
                    </div>
                    <div className="mainimg">
                        <img
                            src={ProgramIcon}
                            className="main-img"
                            alt="Programmer"
                        />
                    </div>
                </div>
                <SocialMobile />
            </div>
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
