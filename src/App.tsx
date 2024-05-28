import { Error } from "./components/Error";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Repositories } from "./components/Repositories";
import { Search } from "./components/Search";
import { Spinner } from "./components/Spinner";
import { useHome } from "./useHome";

function App() {
  const {
    search,
    setSearch,
    error,
    handleSearchRepositories,
    repositoriesIsEmptyOrLoading,
    loadingRepositories,
    selectedRepository,
  } = useHome();

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

      {loadingRepositories && (
        <div className="mt-10">
          <Spinner />
        </div>
      )}

      {!repositoriesIsEmptyOrLoading && <Repositories />}
      {selectedRepository && <Modal />}
    </div>
  );
}

export default App;
