import "./index.css";
import Profiles from "./components/Profile";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  return (
    <div className={`${theme ? "dark" : ""} min-h-screen`}>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Profiles theme={theme} />
    </div>
  );
}

export default App;
