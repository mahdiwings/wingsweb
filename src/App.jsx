import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Portofolio from "./components/Portofolio";
import UnderHeader from "./components/UnderHeader";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // <SheareDarkContext.Provider value={{ darkMode, setDarkMode }}>
    <div className={darkMode ? "dark" : ""}>
      <div className="mb-0 min-h-screen  bg-slate-50 from-blue-950 to-cyan-950 px-10 dark:bg-gradient-to-b md:text-center">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <UnderHeader />
        <MainSection />
        <Portofolio />
      </div>
    </div>
    // </SheareDarkContext.Provider>
  );
}

export default App;
