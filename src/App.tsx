import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <Search />
    </div>
  );
}

export default App;
