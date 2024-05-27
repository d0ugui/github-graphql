import { Search as SearchIcon } from "lucide-react";

export function Search() {
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
          />
        </div>
        <button className="text-white bg-primary py-5 px-10 rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </div>
    </section>
  );
}
