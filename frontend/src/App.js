import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MainLayout from './components/MainLayout';
import Contact from './components/Contact';
import NoteShareMore from './components/NoteShareMore';
import Projects from './components/Projects';
import WeatherAppMore from './components/WeatherAppMore';
import MangaHubMore from './components/MangaHubMore';
import CalculatorMore from './components/CalculatorMore';
import ExallroofingMore from './components/ExellroofingMore';
import MagnetMore from './components/MagnetMore';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/noteShare" element={<MainLayout><NoteShareMore /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/weatherApp" element={<MainLayout><WeatherAppMore /></MainLayout>} />
        <Route path="/mangaHub" element={<MainLayout><MangaHubMore /></MainLayout>} />
        <Route path="/calculator" element={<MainLayout><CalculatorMore /></MainLayout>} />
        <Route path="/exellroofing" element={<MainLayout><ExallroofingMore /></MainLayout>} />
        <Route path="/magnet" element={<MainLayout><MagnetMore /></MainLayout>} />
        <Route path="/scroll" element={<MainLayout><ScrollToTop /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
