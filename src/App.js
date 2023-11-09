import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Watchhistory from './pages/Watchhistory';
import Landingpage from './pages/Landingpage';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>

          <Header/>

          <Routes>

            <Route path='/' element={<Landingpage/>}></Route>
            <Route path='/homepage' element={<Homepage/>}></Route>
            <Route path='/watchhistory' element={<Watchhistory/>}></Route>

          </Routes>

          <Footer/>
    </div>
  );
}

export default App;