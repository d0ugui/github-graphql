import { Circle, GitFork, SquareCode, Star } from "lucide-react";
import { ComponentProps } from "react";
import { RepositoryProps } from "../interfaces/Repository";

interface RepositorieCard extends ComponentProps<"button"> {
  repo: RepositoryProps;
}

export function RepositorieCard({ repo, ...rest }: RepositorieCard) {
  return (
    <button
      className="flex flex-col items-start gap-3 border-[#141414]/20 border-2 rounded-xl p-4 h-[164px] justify-between"
      {...rest}
    >
      <div className="flex items-center gap-4">
        <SquareCode size={24} className="text-primary" />
        <h1 className="font-bold text-primary line-clamp-1 text-start">
          {repo.nameWithOwner}
        </h1>
      </div>

      <p className="text-sm line-clamp-3 text-start">{repo.description}</p>

      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1 text-sm">
          <Circle
            size={12}
            className="rounded-full"
            color={repo.primaryLanguage?.color}
            style={{ backgroundColor: repo.primaryLanguage?.color }}
          />
          {repo.primaryLanguage?.name ?? "undefined"}
        </p>

        <p className="flex items-center gap-1 text-sm">
          <Star size={14} className="text-primary" />
          {repo.stargazerCount}
        </p>

        <p className="flex items-center gap-1 text-sm">
          <GitFork size={14} className="text-primary" />
          {repo.forks.totalCount}
        </p>
      </div>
    </button>
  );
}
