import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Error } from "./components/Error";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Repositories } from "./components/Repositories";
import { Search } from "./components/Search";
import { Spinner } from "./components/Spinner";
import {
  setLoadingRepositories,
  setRepositories,
} from "./features/repositories";
import { searchRepositories } from "./graphql/queries/searchRepositories";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { data, selectedRepository, loadingRepositories } = useAppSelector(
    (state) => state.repositories
  );
  const repositoriesIsEmpty = data.length === 0;

  const [getSearchRepositories, { error }] = useLazyQuery(searchRepositories);

  async function handleSearchRepositories() {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositories({
      variables: { topic: search },
      fetchPolicy: "no-cache",
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setLoadingRepositories({ loading: false }));
  }

  if (error) {
    return <Error message={error?.message} />;
  }

  return (
    <div className="flex flex-col items-center px-4 xl:px-0">
      <Header />
      <Search
        value={search}
        handleChange={setSearch}
        onSubmit={handleSearchRepositories}
      />
      {loadingRepositories ? (
        <div className="mt-10">
          <Spinner />
        </div>
      ) : (
        !repositoriesIsEmpty && <Repositories />
      )}

      {selectedRepository && <Modal />}
    </div>
  );
}

export default App;
