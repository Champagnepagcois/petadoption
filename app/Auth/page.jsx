import React from "react";
import "../style/authPage.css";

export default function AuthPage() {
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
            <div className="container-login-signin">
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
                  />
                </div>
                <div className="container-login-signin-inputs-individual">
                  <input
                    type="text"
                    placeholder="Contraseña"
                    name="password"
                    id="passwordid"
                  />
                </div>
              </div>
              <div className="container-login-signin-message">
                <label htmlFor="">Correo y/o contraseña incorrecta</label>
              </div>
              <div className="container-login-signin-btn">
                <input type="button" value="Iniciar sesion" />
              </div>
            </div>
            <div className="container-login-signin-createAccount">
              <label htmlFor="">No tienes cuenta?</label>
              <label htmlFor="">Crear una cuenta</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
