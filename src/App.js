import React from 'react';
import UserLogin from './modules/users/UserLogin';
import UserRegister from './modules/users/UserRegister';
//import Log from './modules/users/Log';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import MesnWear from './modules/products/MensWear';
import WomensWear from './modules/products/WomensWear';
import KidsWear from './modules/products/KidsWear';
import Cart from './modules/products/Cart';
import UploadProduct from './modules/products/UploadProduct';




let  App =() => {

  return(
    <React.Fragment>
     <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/signin' element={<UserLogin/>} />
          <Route path='/user/singup' element={<UserRegister/>} />
          <Route  path='/products/men'  element={<MesnWear/>}/>
          <Route path='/products/women' element={<WomensWear/>} />
          <Route path='/products/kids' element={<KidsWear/>}/>
          <Route path='/products/cart' element={<Cart/>} />
          <Route path='/product/upload' element={<UploadProduct/>} />
        </Routes>
     </Router>
    </React.Fragment>
  )
}

export default App;
