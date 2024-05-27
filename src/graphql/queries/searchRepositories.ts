import { gql } from "@apollo/client";

export const searchRepositories = gql`
  query ($topic: String!) {
    search(query: $topic, type: REPOSITORY, first: 12) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          forkCount
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
