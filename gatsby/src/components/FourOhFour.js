import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FourOhFourStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    h1 {
        margin-top: -2rem;
        font-size: 20rem;
        font-weight: 600;
        height: 22rem;
        color: var(--red);
        letter-spacing: 1rem;
        @media(max-width: 414px){
            margin-top: 0;
            font-size: 16rem;
        }
    }
    p {
        font-size: 3.5rem;
        font-weight: 300;
        color: var(--red);
        @media(max-width: 414px){
            font-size: 3rem;
            margin-top: -4rem;
        }
    }
    a {
        margin-top: 5rem;
        font-size: 2rem;
        color: var(--red);
        border: 1px solid var(--red);
        border-radius: 4px;
        padding: 1.2rem 2rem;
        transition: all 0.4s;
        text-decoration: none;
        &:hover {
            background-color: var(--redTint);
        }
        @media(max-width: 414px){
            margin-top: 2.5rem;
        }
    }
`;

export const FourOhFour = () => {
    return (
        <FourOhFourStyles>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go home</Link>
        </FourOhFourStyles>
    )
}
