import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';


function App() {
  return (
    <div>
<p className=' text-red-500'>This is app js</p>
<Routes>
  <Route path='/'></Route>
  <Route path='/about' element={<About></About>}></Route>
</Routes>
    </div>
  );
}

export default App;
