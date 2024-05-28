import {
  Circle,
  FileDigit,
  GitFork,
  GitPullRequest,
  SquareCode,
  Star,
  X,
} from "lucide-react";

export function Modal() {
  return (
    <div className="fixed w-[100vw] h-[100vh] inset-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center h-full">
        <div className="w-[500px] bg-white p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SquareCode size={24} className="text-primary" />
              <h1 className="font-bold text-primary line-clamp-1">
                creativetimofficial/nextjs-material-kit
              </h1>
            </div>

            <button>
              <X size={24} />
            </button>
          </div>

          <p className="text-sm line-clamp-5 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>

          <div className="mt-5 flex justify-between">
            <h3 className="font-bold">
              Owner: <span className="font-normal">Douglas</span>
            </h3>

            <p className="font-bold">
              Last updated: <span className="font-normal">2024-05-28</span>
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
                <p className="flex items-center gap-1 text-lg">
                  <Star size={24} className="text-primary" />
                  30
                </p>

                <p className="flex items-center gap-1 text-lg">
                  <GitFork size={24} className="text-primary" />
                  30
                </p>

                <p className="flex items-center gap-1 text-lg">
                  <GitPullRequest size={24} className="text-primary" />
                  30
                </p>

                <p className="flex items-center gap-1 text-lg">
                  <FileDigit size={24} className="text-primary" />
                  30
                </p>
              </div>

              <p className="flex items-center gap-1 text-lg ">
                <Circle
                  size={24}
                  className="rounded-full"
                  color="#f1e05a"
                  style={{ backgroundColor: "#f1e05a" }}
                />
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
