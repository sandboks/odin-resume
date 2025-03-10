

import "../styles/style.css";
import imgGithub from '../img/github-mark.svg';

export default function ResumeRender() {

    return (
        <>
            <div className="resumeContentRoot">
                    <div className="resumeContent">
                        <div className="resumeTopBanner">
                            <h2>YOUR NAME</h2>
                            <div className="contactInfoGrid">
                                <div className="contactInfoGridPair">
                                    <img src={imgGithub}></img>
                                    <span>githubURL</span>
                                </div>
                                <div className="contactInfoGridPair">
                                    <img src={imgGithub}></img>
                                    <span>email</span>
                                </div>
                                <div className="contactInfoGridPair">
                                    <img src={imgGithub}></img>
                                    <span>phone #</span>
                                </div>
                            </div>
                        </div>
                        <div className="resumeMainContent">
                            <div className="resumeContentBlock">
                                <div className="resumeBlockHeader">
                                    <h3>Education</h3>
                                </div>
                                <div className="resumeBlockContent">
                                    <div className="twoColumn">
                                        <div className="resumeBlockColumn">
                                            <p className="HeaderBoldText">Yale</p>
                                            <p>Bachelor of something</p>
                                        </div>
                                        <div className="resumeBlockColumn">
                                            <p>August 2020 - present</p>
                                            <p>Hawaii, US</p>
                                        </div>
                                    </div>
                                    
                                    <p>WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE </p>
                                </div>
                            </div>
                            <div className="resumeContentBlock">
                                <div className="resumeBlockHeader">
                                    <h3>Work</h3>
                                </div>
                                <div className="resumeBlockContent">
                                    <div className="twoColumn">
                                        <div className="resumeBlockColumn">
                                            <p className="HeaderBoldText">Yale</p>
                                            <p>Bachelor of something</p>
                                        </div>
                                        <div className="resumeBlockColumn">
                                            <p>August 2020 - present</p>
                                            <p>Hawaii, US</p>
                                        </div>
                                    </div>
                                    
                                    <p>WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE </p>
                                </div>
                                <div className="resumeBlockContent">
                                    <div className="twoColumn">
                                        <div className="resumeBlockColumn">
                                            <p className="HeaderBoldText">Yale</p>
                                            <p>Bachelor of something</p>
                                        </div>
                                        <div className="resumeBlockColumn">
                                            <p>August 2020 - present</p>
                                            <p>Hawaii, US</p>
                                        </div>
                                    </div>
                                    
                                    <p>WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE WORDES GO HERE </p>
                                </div>
                            </div>
                        </div>
                        <p>hello</p>
                    </div>
            </div>
        </>
    )
}