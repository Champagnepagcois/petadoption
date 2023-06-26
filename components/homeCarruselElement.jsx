import { useRouter } from "next/navigation";
import React from "react";

export default function HomeCarruselElement({
  imgurl,
  nombre,
  message,
  edad,
  descripcion,
  id,
}) {
  const router = useRouter();
  const handleSubmitDetails=(e)=>{
    //e.target.preventdefault();
    router.replace(`DetailsPet/${id}`);
  }
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
        <h3>{edad} meses</h3>
        <h2>{descripcion}</h2>
        <div className="background-container-info-button">
          <input type="submit" value="Ver mas" onClick={handleSubmitDetails}/>
        </div>
      </div>
    </>
  );
}
