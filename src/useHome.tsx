import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import {
  setLoadingRepositories,
  setRepositories,
} from "./features/repositories";
import { searchRepositories } from "./graphql/queries/searchRepositories";
import { useAppDispatch, useAppSelector } from "./hooks";

export function useHome() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { data, selectedRepository, loadingRepositories } = useAppSelector(
    (state) => state.repositories
  );
  const repositoriesIsEmptyOrLoading = data.length === 0 || loadingRepositories;

  const [getSearchRepositories, { error }] = useLazyQuery(searchRepositories);

  async function handleSearchRepositories() {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositories({
      variables: { topic: search },
      fetchPolicy: "no-cache",
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setLoadingRepositories({ loading: false }));

    if (data.search.nodes.length === 0) {
      alert("Essa busca não gerou nenhum resultado.");
    }
  }

  return {
    search,
    error,
    setSearch,
    dispatch,
    selectedRepository,
    loadingRepositories,
    repositoriesIsEmptyOrLoading,
    handleSearchRepositories,
  };
}
