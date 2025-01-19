import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";
import { useDarkMode } from "./context/DarkModeContext";

const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
