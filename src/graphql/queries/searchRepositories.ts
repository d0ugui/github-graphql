import { gql } from "@apollo/client";

export const searchRepositories = gql`
  query (
    $topic: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    search(
      type: REPOSITORY
      query: $topic
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
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
          issues(states: OPEN) {
            totalCount
          }
          pullRequests(states: OPEN) {
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
