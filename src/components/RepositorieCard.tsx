import { Circle, GitFork, SquareCode, Star } from "lucide-react";
import { RepositoryProps } from "../interfaces/Repository";
import { languagesColors } from "../utils/colors";

interface RepositorieCard {
  repo: RepositoryProps;
}

export function RepositorieCard({ repo }: RepositorieCard) {
  const colorsLanguage = languagesColors[repo.primaryLanguage?.name];

  return (
    <div className="flex flex-col items-start gap-3 border-[#141414]/20 border-2 rounded-xl p-4 min-h-[160px] justify-between">
      <div className="flex items-center gap-4">
        <SquareCode size={24} className="text-primary" />
        <h1 className="font-bold text-primary line-clamp-1">
          {repo.nameWithOwner}
        </h1>
      </div>

      <p className="text-sm line-clamp-5">{repo.description}</p>

      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1 text-sm">
          <Circle
            size={12}
            className="rounded-full"
            color={colorsLanguage}
            style={{ backgroundColor: colorsLanguage }}
          />
          {repo.primaryLanguage?.name ?? "undefined"}
        </p>

        <p className="flex items-center gap-1 text-sm">
          <Star size={14} className="text-primary" />
          {repo.stargazerCount}
        </p>

        <p className="flex items-center gap-1 text-sm">
          <GitFork size={14} className="text-primary" />
          {repo.forkCount}
        </p>
      </div>
    </div>
  );
}
