import "./App.css";
import DashboardPage from "./views/DashboardPage";
import LoginPage from "./views/LoginPage";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import GenreList from "./components/GenreList";
import CastList from "./components/CastList";
import RegisterAdmin from "./components/RegisterAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./views/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute toPath="/">
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<MovieList />} />
          <Route path="genres" element={<GenreList />} />
          <Route path="casts" element={<CastList />} />
          <Route path="register-admin" element={<RegisterAdmin />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute toPath="/login">
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
