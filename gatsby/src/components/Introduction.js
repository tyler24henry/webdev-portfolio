import React from 'react';
import styled from 'styled-components';

const IntroductionStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 10rem;
    h2 {
        margin: 0;
        font-size: 5.5rem;
        font-weight: 800;
        @media(max-width: 700px){
            font-size: 4rem;
        }
    }
    #hi {
        margin: 1rem 0;
    }
    #description {
        margin: 1.5rem 0 3rem 0;
        max-width: 450px;
        line-height: 1.5;
        @media(max-width: 700px){
            max-width: 320px;
        }
    }
    a {
        width: 190px;
        text-decoration: none;
        border: 1px solid var(--red);
        border-radius: 3px;
        padding: 1.5rem 0;
        text-align: center;
        transition: all 0.5s;
        &:hover {
            background-color: var(--redTint);
        }
    }
`;

export const Introduction = () => {
    return (
        <IntroductionStyles>
            <p id="hi">Hi.  My name is</p>
            <h2>Tyler Henry.</h2>
            <h2>I build websites.</h2>
            <p id="description">I'm a self-taught web developer based in Perkasie, PA who is striving to build useful and interesting web applications.</p>
            <a href="mailto:tyler.henry2442@gmail.com">Send me an email</a>
        </IntroductionStyles>
    )
}