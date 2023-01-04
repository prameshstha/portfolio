import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Component";
import { HomePage, MovieRS } from "./Pages";
import Workspace from "./Pages/Workspace/Workspace";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-rs" element={<MovieRS />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
