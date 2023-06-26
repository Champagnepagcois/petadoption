import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "../app/context/UserContext";

export default function Signin() {
  const router = useRouter();
  const { newSession } = useUser();
  const [credentials, setCredentials] = useState({
    correo: "",
    password: "",
    hidden: false,
  });
  const handleChangecredentials = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(credentials);
  };
  const handlesignin = async (e) => {
    e.preventDefault();
    console.log("Sign In");
    const res = axios
      .post("/api/auth/signin", credentials)
      .then((res) => {
        const { id, nombre, correo } = res.data.data;
        newSession(id, nombre, correo);
        alert("Bienvenido " +nombre);
        router.replace("/Search");
      })
      .catch((err) => {
        alert("Credenciales invalidas " + err);
      });
    
  };
  return (
    <>
      <form onSubmit={handlesignin} className="container-login-signin">
        <div className="container-login-signin-title">
          <h1>Inicia sesion</h1>
        </div>
        <div className="container-login-signin-text">
          <p>¡Nos encanta verte de nuevo por aquí!</p>
        </div>
        <div className="container-login-signin-inputs">
          <div className="container-login-signin-inputs-individual">
            <input
              type="text"
              placeholder="Correo"
              name="correo"
              id="correoid"
              value={credentials.correo}
              onChange={handleChangecredentials}
            />
          </div>
          <div className="container-login-signin-inputs-individual">
            <input
              type="text"
              value={credentials.password}
              placeholder="Contraseña"
              name="password"
              id="passwordid"
              onChange={handleChangecredentials}
            />
          </div>
        </div>
        <div className="container-login-signin-message">
          <label htmlFor="">Correo y/o contraseña incorrecta</label>
        </div>
        <div className="container-login-signin-btn">
          <input type="submit" value="Iniciar sesion" />
        </div>
      </form>
    </>
  );
}
