import { gql } from "@apollo/client";

export const getRepositoryById = gql`
  query repository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        id
        nameWithOwner
        description
        forkCount
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
        owner {
          login
        }
      }
    }
  }
`;
