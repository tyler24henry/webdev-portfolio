import React from 'react';
import styled from 'styled-components';

const StyledRightNav = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    .fixed {
        position: fixed;
        bottom: 0;
        right: 1vw;
        width: 70px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 2rem;
        border: none;
        .sideways {
            position: relative;
            width: 100%;
            .email {
              text-decoration: none;
              position: absolute;
              left: -60px;
              bottom: 95px;
              transform: rotate(90deg);
            }
        }
        .line {
            height: 80px;
            width: 2px;
            background: var(--black);
        }
    }
`;

export const RightNav = () => {
    return (
        <StyledRightNav>
            <div className="fixed">
                <div className="sideways">
                    <a className="email" href="mailto:tyler.henry2442@gmail.com">tyler.henry2442@gmail.com</a>
                </div>
                <div className="line"></div>
            </div>
        </StyledRightNav>
    )
}
