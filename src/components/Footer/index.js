import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {

    return (
        <footer>
            <h2>© 2021 Alexander Aranda. All Rights Reserved.</h2>
            
                <ul className="footer-icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/arand013"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://twitter.com/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/alexander-aranda1/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;
