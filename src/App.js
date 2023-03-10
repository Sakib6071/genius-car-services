import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
<Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/service-detail/:sID' element={<ServiceDetail></ServiceDetail>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/register' element={<Register></Register>}></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
