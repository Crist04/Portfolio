import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className=" text-center" >
        <h1 className="display-1" >Hi there, Shreyash here</h1>
        <h3 class="display-6">Welcome to myPortfolio page</h3>
      </div>
      <Footer/>
    </>
  );
}

export default App;
