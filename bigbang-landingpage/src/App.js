import './App.css';
import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      {/* <h1>بسم الله الرحمن الرحیم</h1>  */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}