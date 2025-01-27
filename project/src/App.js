import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <Layout>
        <h1 className="text-center text-5xl p-4 font-bold">Rick and Morty API
      </h1>
      <SearchBar/>
    </Layout>
  );
}

export default App;
