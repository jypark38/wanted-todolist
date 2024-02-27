import List from "./components/List";
import Layout from "./Layout";
import Form from "./components/InputAndFilterContainer";
import "./global.css";

function App() {
  return (
    <>
      <Layout>
        <List />
        <Form />
      </Layout>
    </>
  );
}

export default App;
