import React, { useEffect } from 'react';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

const NavStyles = styled.nav`
    padding: 0 100px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
    @media(max-width: 700px){
        padding: 0 100px 0 10px;
    }
    @media(max-width: 500px){
        padding: 0 100px 0 0;
    }
    .in-page-buttons {
        position: relative;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 2.5rem;
        align-items: center;
        #resume {
            text-decoration: none;
            position: absolute;
            right: -106px;
            top: -5px;
            border: 1px solid var(--red);
            padding: 0.4rem 1rem;
            border-radius: 2px;
            font-size: 1.5rem;
            transition: all 0.5s;
            &:hover {
                background-color: var(--redTint);
            }
        }
    }
    button {
        border: none;
        background: none;
        padding: 0;
        color: black;
        box-shadow: none;
        transition: all 0.4s;
        text-decoration: underline;
        text-decoration-color: var(--red);
        &:hover {
            color: var(--red);
        }
    }
    #name {
        text-decoration: none;
        font-weight: 700;
    }
`;

export const Nav = () => {
    let currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    if(currentUrl){
        currentUrl = currentUrl.split('#')[1];
    }

    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    const scrollIntoView = (id) => {
        document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <NavStyles>
            <div>
                <button id="name">Tyler Henry</button>
            </div>
            <div className="in-page-buttons">
                <button type="button" onClick={e => scrollIntoView('about-wrapper')}>About</button>
                <button type="button" onClick={e => scrollIntoView('projects-wrapper')}>Projects</button>
                <button type="button" onClick={e => scrollIntoView('contact-wrapper')}>Contact</button>
                <a id="resume" target="_blank" href="https://res.cloudinary.com/tyler24henry/image/upload/v1609632968/TylerHenryResume.docx_2_ptvg6e.pdf" download="resume">Resume</a>
            </div>
        </NavStyles>
    )
}
