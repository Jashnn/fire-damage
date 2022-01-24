import React from "react";
import { Routes ,Route, Link } from 'react-router-dom';
import AddClientData from "./components/AddClientData";
import FindClient from "./components/FindClient";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Client
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/find"} className="nav-link">
              Find Client
            </Link>
          </li>
        </div>
      </nav>
      <br/>
      <br/>
      <div className="container mt-3">
        <Routes>
          <Route path='/add' element={<AddClientData isAddFlow="true"/>} />
          <Route path='/find' element={<FindClient/>} />
          <Route path='/' element={<FindClient/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;