import { useLazyQuery } from "@apollo/client";
import { searchRepositories } from "./graphql/queries/searchRepositories";
import {
  setLoadingRepositories,
  setPageInfo,
  setRepositories,
} from "./store/ducks/repositories";
import { useAppDispatch, useAppSelector } from "./store/hooks";

export function useHome() {
  const dispatch = useAppDispatch();
  const { data, selectedRepository, loadingRepositories, pageInfo, search } =
    useAppSelector((state) => state.repositories);
  const repositoriesIsEmptyOrLoading = data.length === 0 || loadingRepositories;

  const [getSearchRepositories, { error, fetchMore }] =
    useLazyQuery(searchRepositories);

  async function handleSearchRepositories(query: string) {
    dispatch(setLoadingRepositories({ loading: true }));

    const { data } = await getSearchRepositories({
      variables: { topic: query, first: 9 },
    });

    dispatch(setRepositories({ repositories: data.search.nodes }));
    dispatch(setPageInfo({ pageInfo: data.search.pageInfo }));
    dispatch(setLoadingRepositories({ loading: false }));

    if (data.search.nodes.length === 0) {
      alert("Essa busca não gerou nenhum resultado.");
    }
  }

  async function handleNextAndPrevPage(type: string) {
    dispatch(setLoadingRepositories({ loading: true }));

    const prevPage = {
      topic: search,
      before: pageInfo.startCursor,
      last: 9,
    };

    const nextPage = {
      topic: search,
      after: pageInfo.endCursor,
      first: 9,
    };

    const { data } = await fetchMore({
      variables: type === "next" ? nextPage : prevPage,
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
    handleNextAndPrevPage,
  };
}
