import React from 'react';
import styled from 'styled-components';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Introduction } from './Introduction';

const HomeStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
`;

export const Home = ({ projects }) => {
    return (
        <HomeStyles>
            {/* <div id="introduction-wrapper">
                <Introduction />
            </div> */}
            <div id="about-wrapper">
                <About />
            </div>
            <div id="projects-wrapper">
                <Projects projects={projects} />
            </div>
            <div id="contact-wrapper">
                <Contact />
            </div>
        </HomeStyles>
    )
}
