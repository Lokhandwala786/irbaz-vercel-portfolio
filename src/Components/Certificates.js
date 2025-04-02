import React from "react";

const Certificates = () => {
    const GoToCerti = (link) => {
        window.location.href = link;
    };

    return (
        <div className="certicon" id="certificate">
            <h5>Certificates</h5>
            <h1> </h1>
            <div className="certirow">
                <div className="certidiv1">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">AWS</p>
                            <span className="certititle">
                                Introduction to Cloud computing
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">16 Mar 2024</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv2">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">YHills</p>
                            <span className="certititle">
                                CyberSecurity Internship completion
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">31 Mar 2024</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certirow side">
                <div className="certidiv3">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">IBM</p>
                            <span className="certititle">
                                Introduction to Linux commands and shell
                                scripting
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">27 Jun 2023</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv4">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">CISCO Networking Academy</p>
                            <span className="certititle">
                                Introduction to Cyber security
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">09 Jun 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certirow side">
                <div className="certidiv5">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">Akamai</p>
                            <span className="certititle">
                                Operating Systems Fundamentals
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">18 Sept 2023</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv6">
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">IBM</p>
                            <span className="certititle">
                                Practical Introduction to querying DB
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">08 Dec 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
