'use client';
import axios from "axios";
import React from "react";

export default function CardsPetsSearch() {
  const handleRedirectPet=async()=>{
    const response = await axios.get("api/detailsPet");
    console.log(response);
  }
  return (
    <div onClick={() => handleRedirectPet()} className="itemcontent">
      <div className="itemcontent-image">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80"
          alt="Imagen perrito"
        />
      </div>
      <div className="itemcontent-info">
        <div className="itemcontent-info-location">
          <h2>Ciudad de mexico, Mexico</h2>
        </div>
        <div className="itemcontent-info-name">
          <p>Tom, 4 meses</p>
        </div>
        <div className="itemcontent-info-description">
          <p>Golden</p>
          <p>XS</p>
        </div>
      </div>
    </div>
  );
}
