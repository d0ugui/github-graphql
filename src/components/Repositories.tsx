import { ChevronLeft, ChevronRight } from "lucide-react";
import { setSelectedRepository } from "../features/repositories";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useHome } from "../useHome";
import { RepositorieCard } from "./RepositorieCard";

export function Repositories() {
  const { handleNextAndPrevPage } = useHome();
  const { data: repositories, pageInfo } = useAppSelector(
    (state) => state.repositories
  );
  const dispatch = useAppDispatch();

  return (
    <main className="max-w-[1200px] w-full flex items-start mt-20 flex-col mb-20">
      <h2 className="font-bold text-2xl">Resultados</h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-full">
        {repositories.map((item) => (
          <RepositorieCard
            repo={item}
            key={item.id}
            onClick={() => dispatch(setSelectedRepository({ data: item }))}
          />
        ))}
      </div>

      <div className="flex items-center justify-end w-full gap-1 mt-5">
        <button
          className="p-2 bg-gray-200/70 rounded-lg hover:bg-gray-300"
          onClick={() => handleNextAndPrevPage("previous")}
          disabled={!pageInfo.hasPreviousPage}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="p-2 bg-gray-200/70 rounded-lg hover:bg-gray-300"
          onClick={() => handleNextAndPrevPage("next")}
          disabled={!pageInfo.hasNextPage}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}
