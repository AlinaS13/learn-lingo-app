import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./hooks/PrivateRoute";
import { PublicRoute } from "./hooks/PublicRoute";

import { lazy } from "react";
import "./App.scss";
import { Layout } from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/home/Home"));
const Teachers = lazy(() => import("./pages/teachers/Teachers"));
const Favorites = lazy(() => import("./pages/favorites/Favorites"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <PublicRoute>
                <Teachers />
              </PublicRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
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
