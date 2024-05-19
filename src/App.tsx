import react from 'react';
import './App.css'
import Home from './views/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './shared/Navbar';
import AppRouter from './routes';
function App() {

  return (
    <>
    <Navbar />
    <div className="fluid-container">

      <AppRouter/>
    </div>
    </>
  )
}

export default App
