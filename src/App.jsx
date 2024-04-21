import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from './pages/AboutUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
<Route path='/about-us' element={<AboutUs />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
