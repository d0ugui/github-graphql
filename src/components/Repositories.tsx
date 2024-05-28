import { setSelectedRepository } from "../features/repositories";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RepositorieCard } from "./RepositorieCard";

export function Repositories() {
  const repositories = useAppSelector((state) => state.repositories.data);
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
    </main>
  );
}
