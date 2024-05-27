import { RepositorieCard } from "./RepositorieCard";

export function Repositories() {
  const repos = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    name: `Repositório ${index}`,
    description:
      "LoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.re",
    stars: 20,
    forks: 5,
  }));

  return (
    <main className="max-w-[1200px] w-full flex items-start mt-20 flex-col">
      <h2 className="font-bold text-2xl">Resultados de "marvel api"</h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {repos.map((item) => (
          <RepositorieCard repo={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
