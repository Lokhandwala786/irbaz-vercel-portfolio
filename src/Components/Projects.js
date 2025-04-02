import React from "react";
import Procard from "./Procard";

const Projects = () => {
    return (
        <div className="Skills" id="projects">
            <h5 className="heads">Projects</h5>
            <h1> </h1>
            <div className="projectsbtncon">
                <Procard
                    title="Distributed Whiteboard Application on AWS Cloud"
                    date="Sep 2024 - Dec 2024"
                    frontdesc="Developed a scalable, fault-tolerant distributed whiteboard application using AWS cloud services."
                    backdesc="Designed and implemented a private cloud infrastructure with AWS EC2, DynamoDB, VPC, and ELB. Utilized WebSockets for real-time collaboration and implemented security measures like IAM roles and security groups."
                    tags={["AWS", "Docker", "WebSockets"]}
                />
                <Procard
                    title="IT-CONSULTING: Dynamic Web Application with Laravel"
                    date="Feb 2023 - Mar 2023"
                    frontdesc="Developed a feature-rich dynamic website using Laravel showcasing modern web development skills."
                    backdesc="Implemented CRUD operations, secure image upload, PDF generation, and an admin panel with Laravel's Eloquent ORM for robust database management."
                    tags={["Laravel", "MySQL", "AJAX"]}
                />
                <Procard
                    title="Auditorium Management System with Django"
                    frontdesc="Built a comprehensive auditorium management system using Django with CRUD operations and automated seat allocation."
                    backdesc="Developed a custom admin panel, detailed reporting system, and robust validations for efficient event management."
                    tags={["Django", "Python", "Linux"]}
                />
                <Procard
                    title="Netflix Data Visualization with Amazon QuickSight"
                    frontdesc="Designed interactive dashboards to analyze Netflix content data using Amazon QuickSight."
                    backdesc="Utilized Amazon S3 for data storage and created clear, purpose-driven visualizations for effective data communication."
                    tags={["Data Visualization", "Amazon QuickSight", "Amazon S3"]}
                />
            </div>
            <div className="projectsbtncon">
                <Procard
                    title="Secure File Transfer System with End-to-End Encryption"
                    frontdesc="Developed a secure client-server application in Java implementing cryptographic protocols for secure file transfer."
                    backdesc="Utilized public key infrastructure, cryptographic key management, and network socket programming for a robust security framework."
                    tags={["Java", "Cryptography", "Secure Protocol"]}
                />
                <Procard
                    title="Smart BankerBot Chatbot with Amazon Lex"
                    frontdesc="Created a voice and text chatbot using Amazon Lex to classify user intents and handle banking queries."
                    backdesc="Implemented custom slots, AWS Lambda integration, and context management for an intelligent banking chatbot."
                    tags={["AI", "Amazon Lex", "AWS Lambda"]}
                />
                <Procard
                    title="User-Friendly Online Medicine Purchase App"
                    frontdesc="Designed a seamless user experience for an online medicine purchase app with an intuitive UI."
                    backdesc="Focused on UX design, user-friendly interface, and accessibility improvements."
                    tags={["UX Design", "UI", "Linux"]}
                />
                <Procard
                    title="Host a Website on Amazon S3"
                    frontdesc="Deployed a static website on AWS S3, leveraging cloud storage and hosting capabilities."
                    backdesc="Configured S3 bucket settings, enabled static website hosting, and resolved access issues by implementing proper ACL and bucket policies."
                    tags={["AWS S3", "Cloud Hosting", "Static Website"]}
                />
            </div>
        </div>
    );
};

export default Projects;
