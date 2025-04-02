import React from "react";
import Gitlogo from "../Images/github.png";
import Linkedin from "../Images/linkedin.png";
import Behancelogo from "../Images/behance.png";

const GoToLinkedin = () => {
    window.location.href =
        "https://www.linkedin.com/in/irbaz-lokhandwala/";
};

const GoToGit = () => {
    window.location.href = "https://github.com/irbaz786";
};
const GoToBehance = () => {
    window.location.href = "https://github.com/irbaz786";
};


function SocialBar() {
    return (
        <div className="socbar">
            <img
                src={Gitlogo}
                className="soclogo"
                alt="Github"
                onClick={GoToGit}
            />
            <img
                src={Linkedin}
                className="soclogo"
                alt="Linkedin"
                onClick={GoToLinkedin}
            />
            <img
                src={Behancelogo}
                className="soclogo"
                alt="Behance"
                onClick={GoToBehance}
            />
            <div className="decoratebar"> </div>
        </div>
    );
}

export default SocialBar;
