import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import CounterContextProvider from './Context/ContextCounter';
 
function App() {


  return (
     
 <CounterContextProvider>
<Router>
     <Navbar />
        <Routes>
        <Route path="/" element={<Homepage  />} />
        <Route path="/aboutus" element={<Aboutus  />} />
        <Route path="/contactus" element={<Contactus  />} />

        </Routes>
   </Router>
 </CounterContextProvider>

    

      
 

  
  );
}

export default App;
