import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CuisinePage from './cuisinePage';
import ChineseCuisine from './pages/chineseCuisine'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CuisinePage />} />
        <Route path="/cuisine/:cuisineName" element={<ChineseCuisine />} />
      </Routes>
    </Router>
  );
}

export default App;
