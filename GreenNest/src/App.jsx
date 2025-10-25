import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plants from "./pages/Plants";
import PlantDetails from "./pages/PlantDetails";
import Signin from "./pages/Signin";
import EcoDecor from "./pages/EcoDecor";
//import EcoDecorDetails from "./pages/EcoDecorDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Plants routes */}
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetails />} />

        {/* EcoDecor routes */}
        <Route path="/ecodecor" element={<EcoDecor />} />
        

        {/* Auth routes */}
        <Route path="/signin" element={<Signin />} />
        

        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;

