import './index.css';
import {Routes, Route} from 'react-router-dom';
import BarChart from './components/BarChart/BarChart';
import PieChart from './components/PieChart/PieChart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Tableau from './components/Tableau/Tableau';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/barchart" element={<BarChart/>}/>
        <Route path="/piechart" element={<PieChart/>}/>
        <Route path="/tableau" element={<Tableau/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  );








}

export default App;
