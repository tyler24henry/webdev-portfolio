import React from 'react';
import 'normalize.css';
import { Nav } from './Nav';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { LeftNav } from './LeftNav';
import { RightNav } from './RightNav';

const SiteBorderStyles = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 5px;
`;

const ContentStyles = styled.div`

`;

const BodyStyles = styled.div`
  padding: 8rem 0 20rem 0;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
`;

export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Typography />
    <SiteBorderStyles>
      <ContentStyles>
        <Nav />
        <BodyStyles>
          <LeftNav />
          <div>
            {children}
          </div>
          <RightNav />
        </BodyStyles>
      </ContentStyles>
    </SiteBorderStyles>
    </>
  );
}