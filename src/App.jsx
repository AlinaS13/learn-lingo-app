// import viteLogo from "/lingo.svg";
import { Routes, Route } from "react-router-dom";

import { lazy } from "react";
import "./App.scss";

const Home = lazy(() => import("./pages/home/Home"));
const Teachers = lazy(() => import("./pages/teachers/Teachers"));
const Favorites = lazy(() => import("./pages/favorites/Favorites"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
