import React from 'react';
import { Home } from '../components/Home';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

export default function HomePage({ data }) {
    const projects = data.projects.nodes;
    return (
        <>
            <SEO title="Tyler Henry's Portfolio" />
            <Home projects={projects} />
        </>
    )
}

export const query = graphql`
    query {
        projects: allSanityProject(sort: {fields: _createdAt, order: DESC}) {
            nodes {
                id
                name
                status
                description
                images {
                    image {
                        asset {
                            fluid {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
                technologies {
                    id
                    title
                }
                githubLink
                websiteLink
                _createdAt
            }
        }
    }
`;