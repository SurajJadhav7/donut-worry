import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Doughnuts from "./components/Doughnuts";
import Cakes from "./components/Cakes";
import Waffles from "./components/Waffles";
import Pastries from "./components/Pastries";
import Desserts from "./components/Desserts";
import Shakes from "./components/Shakes";
import Puffs from "./components/Puffs";
import DoughnutsPage from "./pages/DoughnutsPage";
import CakesPage from "./pages/CakesPage";
import WafflesPage from "./pages/WafflesPage";
import PastriesPage from "./pages/PastriesPage";
import DessertsPage from "./pages/DessertsPage";
import ShakesPage from "./pages/ShakesPage";
import PuffsPage from "./pages/PuffsPage";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doughnuts" element={<DoughnutsPage />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/waffles" element={<WafflesPage />} />
        <Route path="/pastries" element={<PastriesPage />} />
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/shakes" element={<ShakesPage />} />
        <Route path="/puffs" element={<PuffsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};
const Home = () => {
  return (
    <div>
      <Carousel />
      <Doughnuts />
      <Cakes />
      <Waffles />
      <Pastries />
      <Desserts />
      <Shakes />
      <Puffs />
      <AboutUs />
    </div>
  );
};

export default App;
