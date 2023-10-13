import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomeAppendPage from './Components/HomeAppendPage/HomeAppendPage';
import AllRoute from './Route/AllRoute';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar /> 
      {/* <HomeAppendPage /> */}
      <AllRoute />
      <Footer />

    </div>
  );
}

export default App;
