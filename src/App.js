import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import Screenbar from './Components/Screenbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Screenbar/>
      <Footer/>
  </div>
    
  );
}

export default App;
