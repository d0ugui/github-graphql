import { useLazyQuery } from "@apollo/client";
import {
  setLoadingRepositories,
  setPageInfo,
  setRepositories,
} from "./features/repositories";
import {
  searchRepositories,
  searchRepositoriesNextPage,
  searchRepositoriesPreviousPage,
} from "./graphql/queries/searchRepositories";
import { useAppDispatch, useAppSelector } from "./hooks";

export function useHome() {
  const dispatch = useAppDispatch();
  const { data, selectedRepository, loadingRepositories, pageInfo, search } =
    useAppSelector((state) => state.repositories);
  const repositoriesIsEmptyOrLoading = data.length === 0 || loadingRepositories;

  const [getSearchRepositories, { error }] = useLazyQuery(searchRepositories);

  const [getSearchRepositoriesNextPageQuery] = useLazyQuery(
    searchRepositoriesNextPage
  );

  const [getSearchRepositoriesPreviousPageQuery] = useLazyQuery(
    searchRepositoriesPreviousPage
  );

  async function handleSearchRepositories(query: string) {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositories({
      variables: { topic: query },
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setPageInfo({ pageInfo: data.search.pageInfo }));
    dispatch(setLoadingRepositories({ loading: false }));

    if (data.search.nodes.length === 0) {
      alert("Essa busca não gerou nenhum resultado.");
    }
  }

  async function handleSearchRepositoriesNextPage() {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositoriesNextPageQuery({
      variables: { topic: search, endCursor: pageInfo.endCursor },
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setPageInfo({ pageInfo: data.search.pageInfo }));
    dispatch(setLoadingRepositories({ loading: false }));

    if (data.search.nodes.length === 0) {
      alert("Essa busca não gerou nenhum resultado.");
    }
  }

  async function handleSearchRepositoriesPreviousPage() {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositoriesPreviousPageQuery({
      variables: { topic: search, startCursor: pageInfo.startCursor },
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setPageInfo({ pageInfo: data.search.pageInfo }));
    dispatch(setLoadingRepositories({ loading: false }));

    if (data.search.nodes.length === 0) {
      alert("Essa busca não gerou nenhum resultado.");
    }
  }

  return {
    search,
    error,
    dispatch,
    pageInfo,
    selectedRepository,
    loadingRepositories,
    repositoriesIsEmptyOrLoading,
    handleSearchRepositories,
    handleSearchRepositoriesNextPage,
    handleSearchRepositoriesPreviousPage,
  };
}
