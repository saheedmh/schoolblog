
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './heading';
import Homepage from './homepage';



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
      </div>
      </BrowserRouter>
  );
}

export default App;
