import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import './App.css';

// Import components and pages 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Work from './Pages/Work';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }, m: 'auto' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Work />} />
        
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
