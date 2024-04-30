import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import About from './About';
import Contact from './Contact';
import MyWorks from './MyWorks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/my-works" element={<MyWorks/>}/>
          {/* <Route path="/*" element={<NotFound/>}/> */}
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        header goes here
      </header>
    </div>
  );
}

export default App;
