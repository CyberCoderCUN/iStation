import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AccessoriesPage from "./pages/Accessories";
import MacPage from "./pages/MacPage";
import IphonePage from "./pages/IphonePage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
