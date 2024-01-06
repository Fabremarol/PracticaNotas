import "./App.css";
import axios from "axios";
import Notes from "./components/notes";
import Create from "./components/create";
import Update from "./components/update";
import Show from "./components/show";
import { Component, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom'; 
// import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, Mo} from 'reactstrap';

const API_URL = "http://localhost:3000/api/v1/notes";


 

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // let mounted = true;
    const getAPIData = async() => {
      const data = await axios.get(API_URL);
      console.log("Por aqui!", data)
      setNotes(data.data)
    }
    getAPIData();
  }, []);

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={< Notes notes={notes} />}></Route>
        <Route path='/create' element={< Create />}></Route>
        <Route path='/update/:id' element={< Update />}></Route>
        <Route path='/show/:id' element={< Show />}></Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
