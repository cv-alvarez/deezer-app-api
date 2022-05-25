import Homepage from './pages/homepage/Homepage';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Searchpage from './pages/homepage/Searchpage';
import Artist from './pages/artist/Artist';

function App() {
  return (
    <div className="App">
<Navbar/>

 <div className="container-fluid py-0 px-0">

 <Routes> 

    <Route path='/' element={<Homepage/>}/>
    <Route path='/search' element={<Searchpage/>}/>
    <Route path='/artist/:id' element={<Artist/>}/>


  




 </Routes>  

 </div>



    </div>
  );
}

export default App;
