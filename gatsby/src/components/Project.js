import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectStyles = styled.div`
    display: grid;
    grid-template-columns: 40vw 1fr;
    gap: 3rem;
    justify-items: center;
    align-items: start;
    @media(max-width: 1100px){
        grid-template-columns: 1fr;
        gap: 0;
    }
    .project-image-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        @media(max-width: 1100px){
            grid-row: 2 / span 1;
        }
        .image-wrapper {
            width: 40vw;
            @media(max-width: 1100px){
                width: 60vw;
            }
            a {
                width: 100%;
            }
            .project-image {
                width: 40vw;
                @media(max-width: 1100px){
                    width: 60vw;
                }
                object-fit: contain;
                box-shadow: 0 0 3px 2px var(--grey);
                border-radius: 4px;
                transition: all 0.5s;
                &:hover {
                    box-shadow: 1px 1px 3px 2px var(--redTint);
                }
            }
        }
        .pagination {
            width: calc(100% - 0.3rem);
            padding-right: 0.3rem;
            display: grid;
            grid-template-columns: auto 1fr auto;
            justify-items: center;
            align-items: start;
            .pages-grid {
                display: grid;
                grid-template-columns: repeat(5, auto);
                gap: 2rem;
                justify-items: center;
            }
            button {
                background: none;
                border: none;
                padding: 0;
                box-shadow: none;
                &[disabled]{
                    pointer-events: none;
                    opacity: 0.5;
                }
            }
            .page-btn {
                position: relative;
                width: 10px;
                .page {
                    color: black;
                    font-size: 1.2rem;
                    width: 10px;
                    border-radius: 0;
                    &:hover {
                        color: var(--red);
                    }
                }
                .border-bottom {
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    background: var(--red);
                    width: 9px;
                    height: 2px;
                }
            }
            img {
                margin-top: 0.2rem;
                width: 16px;
                box-shadow: none;
                border-radius: 0;
            }
            #right {
                transform: rotate(180deg);
            }
        }
    }
    .project-details-wrapper {
        display: grid;
        grid-template-rows: auto 1fr auto auto;
        gap: 2rem;
        @media(max-width: 1100px){
            justify-items: center;
            margin-top: 3rem;
            width: 60vw;
        }
        .project-header {
            width: 100%;
            align-self: start;
            display: grid;
            grid-template-columns: 1fr;
            justify-items: end;
            text-align: right;
            @media(max-width: 1100px){
                justify-items: start;
            }
            #grey {
                margin-bottom: 0.5rem;
                color: #444444;
            }
        }
        .gist {
            background: var(--grey);
            align-self: center;
            padding: 2.2rem;
            border-radius: 2px;
            line-height: 1.4;      
            @media(max-width: 1100px){
                width: calc(100% - 4.4rem);
            }
            @media(max-width: 800px){
                padding: 2rem;
                font-size: 1.3rem;
            }
            p {
                text-align: right;
                @media(max-width: 1100px){
                    text-align: left;
                }
            }
        }
    }
    .flex, .flex-sub-image {
        width: 100%;
        align-self: end;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        flex-wrap: wrap;
        @media(max-width: 1100px){
            display: none;
        }
    }
    .flex-sub-image {
        display: none;
        @media(max-width: 1100px){
            margin-top: 3rem;
            display: flex;
            justify-content: center;
        }
    }
    .links, .links-sub-image {
        justify-self: end;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-items: end;
        gap: 2rem;
        @media(max-width: 1100px){
            display: none;
            justify-self: center;
            justify-items: center;
            grid-template-columns: auto auto;
        }
        a {
            font-size: 1.7rem;
        }
        #github {
            font-size: 1.6rem;
        }
    }
    .links-sub-image {
        display: none;
        @media(max-width: 1100px){
            margin-top: 1rem;
            display: grid;
            justify-self: center;
            justify-items: center;
            grid-template-columns: auto auto;
        }
    }
    &.odd {
        grid-template-columns: 1fr 40vw;
        @media(max-width: 1100px){
            grid-template-columns: 1fr;
            gap: 0;
        }
        .project-image-wrapper {
            grid-column: 2 / span 1;
            @media(max-width: 1100px){
                grid-column: 1 / span 1;
            }
        }
        .project-header {
            justify-items: start;
            text-align: left;
        }
        .project-details-wrapper {
            grid-row: 1 / span 1;
            grid-column: 1 / span 1;
            .gist {
                p {
                    text-align: left;
                }
            }
            .flex, .flex-sub-image {
                justify-content: flex-start;
            }
            .links, .links-sub-image {
                justify-self: start;
            }
        }
    }
`;

export const Project = ({ project, index }) => {
    const projectImagesArr = project.images;
    const [projectImageIndex, setProjectImageIndex] = useState(0);
    const isLastProjectImage = projectImageIndex + 1 >= projectImagesArr.length;
    const isFirstProjectImage = projectImageIndex <= 0;

    const isEven = index % 2 === 0 || index === 0;
    return (
        <ProjectStyles className={isEven ? 'even' : 'odd'}>
            <div className="project-image-wrapper">
                <div className="image-wrapper">
                    <a href={project.websiteLink} target="_blank"><Img className="project-image" fluid={projectImagesArr[projectImageIndex].image.asset.fluid} alt="Project screenshot" /></a>
                </div>
                {projectImagesArr.length > 1 && (
                    <div className="pagination">
                        <button type="button" disabled={isFirstProjectImage} onClick={e => setProjectImageIndex(projectImageIndex - 1)}><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1606601594/chevron-left_ixbyko.svg" alt="Left arrow"/></button>
                        <div className="pages-grid">
                            {Array.from({ length: projectImagesArr.length }).map((_, i) => (
                                <div className="page-btn" key={`page-${i + 1}`}>
                                    <button className="page" type="button" onClick={e => setProjectImageIndex(i)}>{i + 1}</button>
                                    {projectImageIndex === i && (
                                        <div className="border-bottom"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button type="button" disabled={isLastProjectImage} onClick={e => setProjectImageIndex(projectImageIndex + 1)}><img id="right" src="https://res.cloudinary.com/tyler24henry/image/upload/v1606601594/chevron-left_ixbyko.svg" alt="Left arrow"/></button>
                    </div>
                )}
                <div className="flex-sub-image">
                    {project.technologies.map(technology => (
                        <p key={technology.id}><span>{technology.title}</span></p>
                    ))}
                </div>
                <div className="links-sub-image">
                    <a id="github" href={project.githubLink} target="_blank"><FiGithub /></a>
                    <a href={project.websiteLink} target="_blank"><FiExternalLink /></a>
                </div>
            </div>
            <div className="project-details-wrapper">
                <div className="project-header">
                    <span id="grey">{project.status}</span>
                    <h2>{project.name}</h2>
                </div>
                <div className="gist">
                    <p>{project.description}</p>
                </div>
                <div className="flex">
                    {project.technologies.map(technology => (
                        <p id={technology.id}><span>{technology.title}</span></p>
                    ))}
                </div>
                <div className="links">
                    {project.githubLink && (
                        <a id="github" href={project.githubLink} target="_blank"><FiGithub /></a>
                    )}
                    <a href={project.websiteLink} target="_blank"><FiExternalLink /></a>
                </div>
            </div>
        </ProjectStyles>
    )
}
