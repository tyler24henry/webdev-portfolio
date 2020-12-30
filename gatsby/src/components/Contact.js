import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 2rem;
    h2 {
        font-size: 3rem;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        width: 190px;
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

export const Contact = () => {
    return (
        <ContactStyles>
            <h2>I'm available for work.</h2>
            <a href="mailto:tyler.henry2442@gmail.com">Send me an email</a>
        </ContactStyles>
    )
}
