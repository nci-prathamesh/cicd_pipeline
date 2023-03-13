import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import UpdateUser from './users/UpdateUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/updateuser/:id" element={<UpdateUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
