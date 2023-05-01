
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './heading';
import Homepage from './homepage';
import Footer from './footer';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>

    }>

      </Route>
    </Routes>
    <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
