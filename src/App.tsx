import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import ProjectsScreen from "./Screens/ProjectsScreen";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
