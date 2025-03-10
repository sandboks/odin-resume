

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
                        <p>hello</p>
                    </div>
            </div>
        </>
    )
}