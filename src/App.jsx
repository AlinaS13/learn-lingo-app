import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./hooks/PrivateRoute";
import { PublicRoute } from "./hooks/PublicRoute";

import { Layout } from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "../src/pages/home/Home";
import TeachersPage from "../src/pages/teachers/Teachers";
import FavoritesPage from "../src/pages/favorites/Favorites";
import NotFoundPage from "./pages/notFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <PublicRoute>
                <TeachersPage />
              </PublicRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
