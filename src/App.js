
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './heading';
import Homepage from './homepage';
import Footer from './footer';
import Login from './Login';
import Register from './register';
import {ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
    <ToastContainer></ToastContainer>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    
    </Routes>
    <Footer/>
     
</BrowserRouter>
 </div>
  );
}

export default App;
