"use client";
import React, { useState } from "react";
import "../style/authPageSignin.css";
import "../style/authPageSignup.css";
import Signin from "@/components/signin";
import Signup from "@/components/signup";

export default function AuthPage() {
  const [signIn, setSignin] = useState(true);
  const [textauth, setTextauth] = useState({
    signin: ["No tienes cuenta", "Crear una cuenta","Correo y/o contraseña incorrecta"],
    signup: ["Ya tienes cuenta", "Inicia sesion","Introduce la informacion en todos los campos"],
  });
  const handleSubmit = (e) => {
    console.log("Working..");
  };
  const handleChangeAuth = () => {
    setSignin(!signIn);
  };
  return (
    <div className="spacetop">
      <div className="section-auth">
        <div className="section-auth-container">
          <div className="auth-container-image">
            <div className="auth-container-image-container">
              <img
                src="https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Imagen de perrito"
              />
            </div>
          </div>
          <div className="auth-container-login">
            {signIn ? <Signin /> : <Signup />}
            <div className="container-login-signin-createAccount">
              <label htmlFor="">
                {signIn ? textauth.signin[0] : textauth.signup[0]}?
              </label>
              <label htmlFor="" onClick={handleChangeAuth}>
                {signIn ? textauth.signin[1] : textauth.signup[1]}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
