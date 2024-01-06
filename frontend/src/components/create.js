import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from "react";


const Create = () => {
  let navigate = useNavigate();  
  const [notes, setNotes] = useState({
      title: "",
      message: ""
  });

  const { title, message } = notes;
  const onInputChange = e => {
    setNotes({...notes,[e.target.name]: e.target.value});
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/v1/notes', notes);
    navigate("/");
    window.location.reload();
    

  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="my-5">Crear Notas</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className=" form-group mb-2">
            <label className="mb-3">Titulo:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Titulo de la Nota..."
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label className="mb-3">Mensaje:</label>
            <input type="textarea" name="message" className="form-control" placeholder="Escriba el mensaje..." 
            value={message}
            onChange={e => onInputChange(e)}
            />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginTop: 50,
            }}
          >
            <Link to="/" className="btn btn-secondary ms-3">
              Volver
            </Link>
            <button className="btn btn-success">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
