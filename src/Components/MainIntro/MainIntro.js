import './MainIntro.css';
import React from "react";
import GITHUB_ICON from "../assets/images/icons/github-icon.png";
import LINKEDIN_ICON from "../assets/images/icons/linkedin-icon.png";
import DEVPOST_ICON from "../assets/images/icons/devpost-png.png";
import EMAIL_ICON from "../assets/images/icons/mail-logo.png";


function MainIntro() {
    const [menuClass, setMenuClass] = React.useState("menu-toggler");
    const [navClass, setNavClass] = React.useState("top-nav");

    const changeMenu = () => {
        if (menuClass === "menu-toggler") {
            setMenuClass("menu-toggler open");
            setNavClass("top-nav open");
        } else {
            setMenuClass("menu-toggler");
            setNavClass("top-nav");
        }
    }


    const iconsList = [
        {
            id: "1",
            link: "https://github.com/Lemos00",
            srcPic: GITHUB_ICON,
            altText: "github icon",
            iconClass: "landing-icons",
        },
        {
            id: "2",
            link: "https://www.linkedin.com/public-profile/in/gabriel-lemos-rodrigues-b96824198/?challengeId=AQH6iKldX2AKxgAAAXQrU-akdhO21UuzJYHrvwhQmlr3ScLKtzJsheZwfs7osibLRbauv6bXa0vLfy9Pdw9T0raoZREStDberw&submissionId=a1264fe3-20da-2e16-b0c3-f8d88d22aa7d",
            srcPic: LINKEDIN_ICON,
            altText: "linkedin icon",
            iconClass: "landing-icons",
        },
        {
            id: "3",
            link: "https://devpost.com/Lemos00?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
            srcPic: DEVPOST_ICON,
            altText: "devpost icon",
            iconClass: "landing-icons",
        },
        {
            id: "4",
            link: "mailto:webmaster@example.com",
            srcPic: EMAIL_ICON,
            altText: "email",
            iconClass: "landing-icons",
        },
    ]

    return (
        <div className="mainWrapper">
            <div className={menuClass} onClick={changeMenu}>
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>
            <nav className={navClass}>
                <ul className="nav-list">
                    <li>
                        <a href="#about" className="nav-link">About me</a>   
                    </li>
                    <li>
                        <a href="#skills" className="nav-link">Skills</a>   
                    </li>
                    <li>
                        <a href="#experience" className="nav-link">Experience</a>   
                    </li>
                    <li>
                        <a href="#projects" className="nav-link">Projects</a>   
                    </li>
                    <li>
                        <a href="#awards" className="nav-link">Awards</a>   
                    </li>
                </ul>
            </nav>
            <div className="landing-text">
                <h1>Gabriel Lemos Rodrigues</h1>
                <h6>Incoming Software Engineer @ Microsoft</h6>
                <div className="icons">
                    {iconsList.map((iconInfo) => {
                        return <a href={iconInfo.link} key={iconInfo.id} className={iconInfo.iconClass}>
                            <img src={iconInfo.srcPic} alt={iconInfo.altText}/>
                        </a>
                    })}
                </div>
            </div>


        </div>
    );
}

export default MainIntro;
