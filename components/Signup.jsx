import React,{useState} from "react";

export default function Signup(e) {
  const [credentials, setCredentials] = useState({
    nombre: "",
    correo: "",
    pais: "",
    estado: "",
    cp:"",
    colonia: "",
    direccion: "",
  });
  const handleChangecredentials = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(credentials);
  };
  const handlesignup = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <>
      <form onSubmit={handlesignup} className="container-login-signup">
        <div className="container-login-signup-title">
          <h1>Crea una cuenta</h1>
        </div>
        <div className="container-login-signup-text">
          <p>¡Nos encanta verte de nuevo por aquí!</p>
        </div>
        <div className="container-login-signup-inputs">
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.nombre}
              type="text"
              placeholder="Nombre (o nombre de la institucion)"
              name="nombre"
              id="nombreid"
            />
          </div>
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.correo}
              type="text"
              placeholder="Correo"
              name="correo"
              id="correoid"
            />
          </div>
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.pais}
              type="text"
              placeholder="Pais"
              name="pais"
              id="paisid"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.estado}
              type="text"
              placeholder="Estado"
              name="estado"
              id="estadoid"
            />
          </div>
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.cp}
              type="text"
              placeholder="Codigo postal"
              name="cp"
              id="cpid"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.colonia}
              type="text"
              placeholder="Colonia"
              name="colonia"
              id="coloniaid"
            />
          </div>
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.direccion}
              type="text"
              placeholder="Direccion"
              name="direccion"
              id="direccionid"
            />
          </div>
        </div>
        <div className="container-login-signup-message">
          <label htmlFor="">Introduce la informacion en todos los campos</label>
        </div>
        <div className="container-login-signup-btn">
          <input type="submit" onClick={handlesignup} value="Iniciar sesion" />
        </div>
      </form>
    </>
  );
}
