import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import ProjectsScreen from "./Screens/ProjectsScreen";
import ContactsScreen from "./Screens/ContactsScreen";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
      <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
            <Route path="/contacts" element={<ContactsScreen />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
