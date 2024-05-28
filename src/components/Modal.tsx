import {
  Circle,
  FileDigit,
  GitFork,
  GitPullRequest,
  SquareCode,
  Star,
  X,
} from "lucide-react";
import { resetSelectedRepository } from "../features/repositories";
import { useAppDispatch, useAppSelector } from "../hooks";
import { formatDate } from "../utils/formatDate";

export function Modal() {
  const { selectedRepository } = useAppSelector((state) => state.repositories);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed w-[100vw] h-[100vh] inset-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center h-full">
        <div className="w-[500px] bg-white p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SquareCode size={24} className="text-primary" />
              <h1 className="font-bold text-primary line-clamp-1">
                {selectedRepository?.nameWithOwner}
              </h1>
            </div>

            <button onClick={() => dispatch(resetSelectedRepository())}>
              <X size={24} />
            </button>
          </div>

          <p className="text-sm line-clamp-5 mt-5">
            {selectedRepository?.description}
          </p>

          <div className="mt-5 flex flex-col justify-between">
            <h3 className="font-bold">
              Owner:{" "}
              <span className="font-normal">
                {selectedRepository?.owner.login}
              </span>
            </h3>

            <p className="font-bold">
              Last updated:{" "}
              <span className="font-normal">
                {formatDate(selectedRepository!.updatedAt)}
              </span>
            </p>
          </div>

          <div className="mt-5">
            <strong>
              Stats{" "}
              <span className="font-normal text-sm">
                (Starts, Forks, PRs, Issues)
              </span>
            </strong>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-4 ">
                <p className="flex items-center gap-1 text-base">
                  <Star size={18} className="text-primary" />
                  {selectedRepository?.stargazerCount}
                </p>

                <p className="flex items-center gap-1 text-base">
                  <GitFork size={18} className="text-primary" />
                  {selectedRepository?.forks.totalCount}
                </p>

                <p className="flex items-center gap-1 text-base">
                  <GitPullRequest size={18} className="text-primary" />
                  {selectedRepository?.pullRequests.totalCount}
                </p>

                <p className="flex items-center gap-1 text-base">
                  <FileDigit size={18} className="text-primary" />
                  {selectedRepository?.issues.totalCount}
                </p>
              </div>

              <p className="flex items-center gap-1 text-base ">
                <Circle
                  size={18}
                  className="rounded-full"
                  color={selectedRepository?.primaryLanguage.color}
                  style={{
                    backgroundColor: selectedRepository?.primaryLanguage.color,
                  }}
                />
                {selectedRepository?.primaryLanguage.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
