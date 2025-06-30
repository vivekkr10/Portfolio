import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MainLayout from './components/MainLayout';
import Contact from './components/Contact';
import NoteShareMore from './components/NoteShareMore';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/noteShare" element={<MainLayout><NoteShareMore /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
