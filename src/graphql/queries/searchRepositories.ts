import { gql } from "@apollo/client";

export const searchRepositories = gql`
  query ($topic: String!) {
    search(query: $topic, type: REPOSITORY, first: 12) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          stargazerCount
          updatedAt
          primaryLanguage {
            name
            color
          }
          issues {
            totalCount
          }
          pullRequests {
            totalCount
          }
          forks {
            totalCount
          }
          owner {
            login
          }
        }
      }
    }
  }
`;
