import "./App.css";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";
import LandingPage from "./views/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<HomePage />} />
        <Route path="/movies/:category" element={<HomePage />} />
        <Route path="/movies/detail/:id/:slug" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
