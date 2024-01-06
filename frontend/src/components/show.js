import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

const Show = () => {
  
  const [notes, setNotes] = useState({
    title: "",
    message: "",
  });

  const {id} = useParams();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/notes/${id}`);
    setNotes(res.data);
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="my-5">Detalle de la Nota</h1>
        <div className="mb2">
          <h3>Id de la Nota: {id}</h3>
        </div>
        <div className="mt-3">
          <strong>Titulo: {notes.title}</strong>
        </div>
        <div className="mt-3">
          <strong>Mensaje: {notes.message}</strong>
        </div>
        <div>
          <Link to="/" className="btn btn-primary my-5">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Show;
