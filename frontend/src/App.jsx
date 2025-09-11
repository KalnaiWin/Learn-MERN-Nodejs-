import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn btn-neutral">Activate</button>
      <button className="btn btn-primary">Activate</button>
      <button className="btn btn-secondary">Activate</button>
      <button className="btn btn-accent">Activate</button>
      <button className="btn btn-ghost">Activate</button>
      <button className="btn btn-link">Activate</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
