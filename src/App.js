import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import About from './About';
import Contact from './Contact';
import MyWorks from './MyWorks';

function App() {
  return (
    <div className="App">
      <div className='App-child'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/about" replace />}/> */}
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/my-works" element={<MyWorks/>}/>

            {/* redirect wrong subdomains to about page*/}
            <Route
                path="*"
                element={<Navigate to="/about" replace />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
