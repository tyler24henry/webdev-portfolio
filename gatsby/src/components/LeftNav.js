import React from 'react';
import styled from 'styled-components';

const StyledLeftNav = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    .fixed {
        position: fixed;
        bottom: 0;
        left: 2vw;
        width: 70px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 2rem;
        border: none;
        img {
            width: 25px;
        }
        .line {
            margin-top: 0.7rem;
            height: 80px;
            width: 2px;
            background: var(--black);
        }
    }
`;

export const LeftNav = () => {
    return (
        <StyledLeftNav>
            <div className="fixed">
                <a href="https://github.com/tyler24henry" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1607127241/github_xzodhd.svg" alt="Github icon" /></a>
                <a href="https://www.instagram.com/tyler24henry/" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1607127241/instagram_uzd9vg.svg" alt="Instagram icon" /></a>
                <a href="https://www.twitter.com/tyler24henry/" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1607127241/twitter_vzu0qb.svg" alt="Twitter icon" /></a>
                <div className="line"></div>
            </div>
        </StyledLeftNav>
    )
}
