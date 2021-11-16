import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import './App.css';
import UpdateUsers from "./components/UpdateUser/UpdateUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/update/:id" element={<UpdateUsers/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'

const App = () => {
  return (
    <div>
        <h2>wecome</h2>
    </div>
  )
}

export default App
