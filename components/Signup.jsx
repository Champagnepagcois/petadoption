'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "../app/context/UserContext";

export default function Signup(e) {
  const router = useRouter();
  const {newSession} = useUser();
  const [credentials, setCredentials] = useState({
    nombre: "",
    calle: "",
    cp: "",
    estado: "",
    delegacion: "",
    ciudad: "",
    colonia: "",
    referencia: "",
    telefono: "",
    correo: "",
    password: "",
    passwordVerification: "",
  });
  const handleChangecredentials = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //console.log(credentials);
  };
  const handlesignup = (e) => {
    e.preventDefault();
    const validPassword =
      credentials.password === credentials.passwordVerification;
    if (!validPassword) return alert("Tus contraseñas no coinciden!");
    const res = axios
      .post("http://localhost:3000/api/auth/signup", credentials)
      .then((res) => {
        const {id,nombre,correo} = res.data.data;
        newSession(id,nombre,correo);
        alert("Bienvenido "+ nombre);
        router.replace("/Search");
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        alert(
          "Ocurrio un error, verifica que tus datos estén completados e intenta nuevamente" +
            err
        );
      });
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
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.calle}
              type="text"
              placeholder="Calle y número"
              name="calle"
              id="calleid"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.cp}
              type="text"
              placeholder="Codigo postal"
              name="cp"
              id="cp"
            />
          </div>
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.estado}
              type="text"
              placeholder="Estado"
              name="estado"
              id="estadoid"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.delegacion}
              type="text"
              placeholder="Delegacion"
              name="delegacion"
              id="delegacionId"
            />
          </div>
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.ciudad}
              type="text"
              placeholder="Ciudad"
              name="ciudad"
              id="ciudadId"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.colonia}
              type="text"
              placeholder="Colonia"
              name="colonia"
              id="coloniaId"
            />
          </div>
          <div className="container-login-signup-inputs-individual-container">
            <input
              onChange={handleChangecredentials}
              value={credentials.referencia}
              type="text"
              placeholder="Referencia"
              name="referencia"
              id="referenciaId"
            />
            <input
              onChange={handleChangecredentials}
              value={credentials.telefono}
              type="text"
              placeholder="Telefono"
              name="telefono"
              id="telefonoId"
            />
          </div>
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.correo}
              type="text"
              placeholder="Correo"
              name="correo"
              id="correoId"
            />
          </div>
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.password}
              type="text"
              placeholder="Pasword"
              name="password"
              id="passwordId"
            />
          </div>
          <div className="container-login-signup-inputs-individual">
            <input
              onChange={handleChangecredentials}
              value={credentials.passwordVerification}
              type="text"
              placeholder="password"
              name="passwordVerification"
              id="password"
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
