import { gql } from "@apollo/client";

export const searchRepositories = gql`
  query ($topic: String!) {
    search(query: $topic, type: REPOSITORY, first: 9) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const searchRepositoriesNextPage = gql`
  query ($topic: String!, $endCursor: String) {
    search(query: $topic, type: REPOSITORY, first: 9, after: $endCursor) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const searchRepositoriesPreviousPage = gql`
  query ($topic: String!, $startCursor: String) {
    search(query: $topic, type: REPOSITORY, last: 9, before: $startCursor) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
