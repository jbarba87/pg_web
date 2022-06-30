import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import About from './components/About';
import Cv from './components/Cv';
import Head from './components/Head';

function App() {
  return (
    <>
      <BrowserRouter>
        <Head/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/cv" element={<Cv/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;