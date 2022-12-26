import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Footer from "./Components/Pages/Footer/Footer";
import HomePage from "./Components/Pages/HomePage/HomePage";
import JoinNow from "./Components/Pages/Shop/JoinNow";
import Navbar from "./Components/Navigation/Navbar";
import Login from "./Components/Pages/User/Login";
import Register from "./Components/Pages/User/Register";
import ShopDetails from "./Components/Pages/Shop/ShopDetails"; 
import RetailorsList from "./Components/Pages/Retailors/RetailorsList";
import Profile from "./Components/Pages/Profile/Profile";
import Dashboard from "./Components/Pages/HomePage/Dashboard";
import UpdatePassword from "./Components/Pages/User/UpdatePassword";
import UpdateProfile from "./Components/Pages/Profile/UpdateProfile";
import UploadProfilePhoto from "./Components/Pages/Profile/UploadProfilePhoto";
import PrivateProtected from "./Components/Navigation/ProtectedRoutes/PrivateProtected";
import AdminProtected from "./Components/Navigation/ProtectedRoutes/AdminProtected";
import UpdateShop from "./Components/Pages/Shop/UpdateShop";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          
          <Route path='/dashboard' element={<AdminProtected><Dashboard/></AdminProtected>}/>
          <Route path='/retailors' element={<AdminProtected><RetailorsList/></AdminProtected>}/>

           
          <Route path='/join-now' element={<PrivateProtected><JoinNow/></PrivateProtected>}/>
          <Route path='/updatepassword' element={<PrivateProtected><UpdatePassword/></PrivateProtected>}/>
          
          <Route path='/profile/:id' element={<PrivateProtected><Profile/></PrivateProtected>}/>
          <Route path='/update-profile/:id' element={<PrivateProtected><UpdateProfile/></PrivateProtected>}/>
          <Route path='/upload-profile-photo/:id' element={<PrivateProtected><UploadProfilePhoto/></PrivateProtected>}/>
          <Route path='/updateshop/:id' element={<PrivateProtected><UpdateShop/></PrivateProtected>}/>
          
          <Route path='/shop/:id' element={<ShopDetails/>}/>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer toastClassName=" relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer" />
    </div>
  );
}

export default App;
