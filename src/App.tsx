import { Header } from "./components/Header";
import { Repositories } from "./components/Repositories";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Search />
      <Repositories />
    </div>
  );
}

export default App;
