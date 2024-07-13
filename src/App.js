import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experince';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Portfolio from './Component/Portfolio';
import Sociallink from './Component/Sociallink';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
 
function App() {
  return (
  <div>
  <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Sociallink/>
  </Router>
  </div>
  );
}

export default App;
