import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: 3rem;
    @media(max-width: 950px){
        grid-template-columns: 1fr;
        gap: 0;
    }
    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .header {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 3rem;
        align-items: center;
        h2 {
            font-weight: 700;
        }
        .line {
            height: 1px;
            width: 100%;
            background: #09182d;
        }
    }
    p {
        line-height: 1.5;
    }
    #bold {
        font-weight: 700;
    }
    #underline {
        text-decoration: underline;
        text-decoration-color: var(--red);
    }
    .technologies {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .left, .right {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
            span {
                font-size: 1.5rem;
            }
        }
    }
    .image-wrapper {
        margin-top: 4.5rem;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        img {
            width: 280px;
            border-radius: 10px;
            box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
            border: 5px solid var(--grey);
        }
    }
`;

export const About = () => {
    return (
        <AboutStyles>
            <div className="about-grid">
                <div className="header">
                    <h2>About me</h2>
                    <div className="line"></div>
                </div>
                <p>Hi, I'm <span id="bold">Tyler Henry</span>, a self-taught web developer based in <span id="bold">Perkasie, PA</span>.</p>
                <p>I graduated from <span id="bold">Temple University</span> in 2016 with a degree in Biology and never truly connected with the path that I was on.  I made the transition to programming in July 2019.</p>
                <p>I soon found myself in "tutorial hell" with other defeated nascent web developers.  Despite the efforts of the programming gods, I did not let the experience break my spirit and consider myself lucky to have survived with my idealism still intact.  It was and still remains my goal to make useful and interesting web applications.</p>
                <p>Here are some of the technologies I have been working with:</p>
                <div className="technologies">
                    <div className="left">
                        <span>&bull;</span>
                        <span>Javascript (ES6+)</span>
                        <span>&bull;</span>
                        <span>React</span>
                        <span>&bull;</span>
                        <span>Node.js</span>
                    </div>
                    <div className="right">
                        <span>&bull;</span>
                        <span>HTML & CSS</span>
                        <span>&bull;</span>
                        <span>Gatsby</span>
                        <span>&bull;</span>
                        <span>GraphQL</span>
                    </div>
                </div>
            </div>
            <div className="image-wrapper">
                <img src="https://res.cloudinary.com/tyler24henry/image/upload/v1607133228/myface2_g0r3dl.jpg" alt="My face" />
            </div>
        </AboutStyles>
    )
}