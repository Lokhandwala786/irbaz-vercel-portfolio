import React from "react";

function NavBar(props) {
    return (
        <div className="navbar">
            {/* Image hata diya, ab sirf navigation elements rahenge */}
            <div className="navelements">
                <span
                    onClick={() => {
                        props.scrollFunction("home");
                    }}
                >
                    Home
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("skills");
                    }}
                >
                    Skills
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("certificate");
                    }}
                >
                    Certificates
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("projects");
                    }}
                >
                    Projects
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("contact");
                    }}
                >
                    Contact
                </span>
            </div>
        </div>
    );
}

export default NavBar;