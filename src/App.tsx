import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Error } from "./components/Error";
import { Header } from "./components/Header";
import { Repositories } from "./components/Repositories";
import { Search } from "./components/Search";
import { setRepositories } from "./features/repositories";
import { searchRepositories } from "./graphql/queries/searchRepositories";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const repositoriesIsEmpty =
    useAppSelector((state) => state.repositories.data.length) === 0;

  const [getSearchRepositories, { loading, error }] =
    useLazyQuery(searchRepositories);

  async function handleSearchRepositories() {
    const { data } = await getSearchRepositories({
      variables: { topic: search },
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
  }

  if (error) {
    return <Error message={error?.message} />;
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Search
        value={search}
        handleChange={setSearch}
        onSubmit={handleSearchRepositories}
      />
      {loading ? (
        <div className="mt-20">
          <h2 className="text-4xl text-start">Loading...</h2>
        </div>
      ) : (
        !repositoriesIsEmpty && <Repositories />
      )}
    </div>
  );
}

export default App;
