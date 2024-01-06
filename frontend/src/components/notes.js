import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import DataTable from 'react-data-table-component'


function Notes(props) {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const result = await axios.get("http://localhost:3000/api/v1/notes");
    setNotes(result.data.reverse());
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:3000/api/v1/notes/${id}`);
    loadNotes();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1 className="my-5">Lista de Notas</h1>
      <div className="w-75 rounded bg-white border shadow p-5">
        <div className="d-flex justify-content-end">
          <Link
            style={{ width: "170px", marginBottom: "10px", fontWeight: "bold" }}
            className="btn btn-success lg"
            to="/create"
          >
            <i class="fas fa-plus-circle"> </i> Nueva Nota
          </Link>
        </div>
        <table className="table table-stipend">
          <thead>
            <tr className="sortable: true">
              <th>Id</th>
              <th>Titulo</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => {
              return (
                <tr key={note.id}>
                  {" "}
                  <td>{note.id}</td>
                  <td>{note.title}</td>
                  <td>{note.message}</td>
                  <td>
                    <Link
                      className="btn btn-primary m-1"
                      to={`/show/${note.id}`}
                    >
                      <i className="fas fa-eye"></i>
                    </Link>
                    <Link
                      className="btn btn-warning m-1"
                      to={`/update/${note.id}`}
                    >
                      <i className="far fa-edit"></i>
                    </Link>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => deleteNote(note.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Notes;
