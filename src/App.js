import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Carousel from 'react-material-ui-carousel';

function App() {
  return (
   <>
   <ToastContainer/>
   <Routing/>
   
   </>
  
  );
}

export default App;
