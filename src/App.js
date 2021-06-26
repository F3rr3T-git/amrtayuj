import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/pages/Home/Home';
import Signup from './Components/pages/SignUp&Login/SignUpUser';
import Login from './Components/pages/SignUp&Login/LoginUser';
import Doctors from './Components/pages/Doctors/Doctors';
import Consultancy from './Components/pages/Consultancy/Consultancy';
import Pharmacy from './Components/pages/Pharmacy/Pharmacy';
import Diagnostics from './Components/pages/Diagnostics/Diagnostics';

function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/doctors' component={Doctors}/>
    <Route path='/consultancy' component={Consultancy}/>
    <Route path='/pharmacy' component={Pharmacy}/>
    <Route path='/diagnostics' component={Diagnostics}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/login' component={Login}/>
  </Switch>
  <Footer/>
  </Router>
  </>
  );
}

export default App;
