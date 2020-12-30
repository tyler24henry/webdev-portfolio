import React from 'react';
import styled from 'styled-components';
import { Project } from './Project';

const ProjectsStyles = styled.div`
    h2 {
        font-weight: 700;
    }
    .header {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 3rem;
        align-items: center;
        margin-bottom: 4rem;
        @media(max-width: 700px){
            text-align: center;
        }
        .line {
            height: 1px;
            width: 30vw;
            background: #09182d;
            @media(max-width: 1000px){
                width: 100%;
            }
            @media(max-width: 600px){
                width: 0;
            }
        }
    }
    .projects-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10rem;
        align-items: center;
    }
`;

export const Projects = ({ projects }) => {
    return (
        <ProjectsStyles>
            <div className="header">
                <h2>What I've Been Working On</h2>
                <div className="line"></div>
            </div>
            <div className="projects-wrapper">
                {projects.map((project, index) => {
                    return (
                        <Project key={project.id} project={project} index={index} />
                    )
                })}
            </div>
        </ProjectsStyles>
    )
}
