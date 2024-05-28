export interface RepositoryProps {
  id: number;
  nameWithOwner: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
}
