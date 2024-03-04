import ListSection from "./components/List";
import Layout from "./Layout";
import InputAndFilterContainer from "./components/InputAndFilterContainer";
import "./global.css";

function App() {
  return (
    <>
      <Layout>
        <ListSection />
        <InputAndFilterContainer />
      </Layout>
    </>
  );
}

export default App;
