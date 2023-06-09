'use client';
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

export default function CardsPetsSearch({id,estado,delegacion,link,nombre,edad,raza,size}) {
  const router = useRouter();
  const handleRedirectPet=async()=>{
    router.replace(`DetailsPet/${id}`);
  }
  return (
    <div onClick={() => handleRedirectPet()} className="itemcontent" key={crypto.randomUUID()}>
      <div className="itemcontent-image">
        <img
          src={"/images/uploaded/"+link}
          alt="Imagen perrito"
        />
      </div>
      <div className="itemcontent-info">
        <div className="itemcontent-info-location">
          <h2>{estado}, {delegacion}</h2>
        </div>
        <div className="itemcontent-info-name">
          <p>{nombre}, {edad} meses</p>
        </div>
        <div className="itemcontent-info-description">
          <p>{raza}</p>
          <p>{size}</p>
        </div>
      </div>
    </div>
  );
}
