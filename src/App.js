import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Men from './pages/Men';
import RequireAuth from './context/RequireAuth';
import Woman from './pages/Woman';
import Man from './pages/Man';
import Women from './pages/Women';
import Faq from './pages/Faq';
import Addtocart from './pages/Addtocart';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="" element={<Home/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="men"
        element={
         <RequireAuth>
           <Men/>
         </RequireAuth>
       }
        />
         <Route path="women"
        element={
         <RequireAuth>
           <Women/>
         </RequireAuth>
       }
        />
         
         <Route path="faq"
        element={
         <RequireAuth>
           <Faq/>
         </RequireAuth>
       }
        />
         <Route path="addtocart"
        element={
         <RequireAuth>
           <Addtocart/>
         </RequireAuth>
       }
        />
        <Route path="/men/:id" element={<Man/>}/>
        <Route path="/women/:id" element={<Woman/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
