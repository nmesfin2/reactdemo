import './App.css';
import Header  from './components/layouts/Header'
import Landing  from './components/layouts/Landing'
import Footer  from './components/layouts/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
