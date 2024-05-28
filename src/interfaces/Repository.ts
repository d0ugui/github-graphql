export interface RepositoryProps {
  id: number;
  nameWithOwner: string;
  description: string;
  updatedAt: string;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
  issues: {
    totalCount: number;
  };
  pullRequests: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  owner: {
    login: string;
  };
}
