import {Route, Routes} from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import About from './About';
import Contact from './Contact';
import MyWorks from './MyWorks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<About/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="my-works" element={<MyWorks/>}/>
        {/* <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
