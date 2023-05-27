import React from "react";

export default function HomeCarruselElement({
  imgurl,
  nombre,
  message,
  edad,
  descripcion,
  id,
}) {
  return (
    <>
      <div className="background-image">
        <img src={imgurl} alt="Imagen de perrito" />
      </div>
      <div className="background-message">
        <h1>{message}</h1>
      </div>
      <div className="background-container-info">
        <h1>{nombre}</h1>
        <h3>{edad}</h3>
        <h2>{descripcion}</h2>
        <div className="background-container-info-button">
          <input type="submit" value="Ver mas" />
        </div>
      </div>
    </>
  );
}
