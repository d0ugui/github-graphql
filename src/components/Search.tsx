import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { setSearchFilter } from "../features/repositories";
import { useAppDispatch, useAppSelector } from "../hooks";

interface SearchProps {
  onSubmit(query: string): void;
}

export function Search({ onSubmit }: SearchProps) {
  const { loadingRepositories, search } = useAppSelector(
    (state) => state.repositories
  );
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState(search);

  function handleSubmit() {
    if (!searchQuery || searchQuery === " ") {
      return alert("Preencha o campo de busca");
    }

    dispatch(setSearchFilter({ search: searchQuery }));
    onSubmit(searchQuery);
  }

  return (
    <section className="flex flex-col max-w-[1200px] w-full mt-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-6xl font-semibold">
          Find your <span className="text-primary">repository</span> today
        </h2>
        <p className="text-lg">
          Milhares de repositórios disponíveis em um só lugar esperando por você
        </p>
      </div>

      <div className="flex mt-20">
        <div className="flex items-center flex-1 gap-4 border-2 border-[#141414]/20 rounded-tl-lg rounded-bl-lg p-5 border-r-0">
          <SearchIcon size={24} className="text-[#141414]/40 " />

          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-primary py-5 px-10 rounded-tr-lg rounded-br-lg"
          onClick={handleSubmit}
          disabled={loadingRepositories}
        >
          Search
        </button>
      </div>
    </section>
  );
}
