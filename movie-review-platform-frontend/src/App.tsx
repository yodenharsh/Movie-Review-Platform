import { FC } from "react";
import "./App.css";
import TheHeader from "./components/TheHeader";
import LandingPage from "./pages/LandingPage/LandingPage";
import "swiper/css";
import "swiper/css/free-mode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfoPage from "./pages/MovieInfoPage/MovieInfoPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path={"/movie/:id"} element={<MovieInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
