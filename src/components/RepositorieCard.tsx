import { Circle, GitFork, SquareCode, Star } from "lucide-react";

interface RepositorieCardProps {
  repo: {
    id: number;
    name: string;
    description: string;
    stars: number;
    forks: number;
  };
}

export function RepositorieCard({ repo }: RepositorieCardProps) {
  return (
    <div className="flex flex-col items-start gap-3 border-[#141414]/20 border-2 rounded-xl p-4">
      <div className="flex items-center gap-4">
        <SquareCode size={24} className="text-primary" />
        <h1 className="font-bold text-primary">{repo.name}</h1>
      </div>

      <p className="text-sm line-clamp-5">{repo.description}</p>

      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1 text-sm">
          <Circle size={12} color="red" className="bg-red-500 rounded-full" />
          JSON
        </p>

        <p className="flex items-center gap-1 text-sm">
          <Star size={14} className="text-primary" />
          {repo.stars}
        </p>

        <p className="flex items-center gap-1 text-sm">
          <GitFork size={14} className="text-primary" />
          {repo.forks}
        </p>
      </div>
    </div>
  );
}
