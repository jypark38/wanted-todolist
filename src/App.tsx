import List from "./components/List";
import Layout from "./Layout";
import InputAndFilterContainer from "./components/InputAndFilterContainer";
import "./global.css";

function App() {
  return (
    <>
      <Layout>
        <List />
        <InputAndFilterContainer />
      </Layout>
    </>
  );
}

export default App;
