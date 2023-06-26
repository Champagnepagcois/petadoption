'use client';
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AddCardPet() {
  const router = useRouter();
  const handleRedirectPet=async()=>{
    router.replace('/User/AddPet');
  }
  return (
    <div onClick={() => handleRedirectPet()} className="itemcontent" key={crypto.randomUUID()}>
      <div className="itemcontent-imagecenterAddPet">
        <Image src="/images/home/plus.png" width={100} height={100}  alt="Icon image"/>
      </div>
      <div className="itemcontent-info">
        <div className="itemcontent-info-location">
            <h2>Agregar una mascota</h2>
        </div>
        <div className="itemcontent-info-name">
        </div>
        <div className="itemcontent-info-description">
        </div>
      </div>
    </div>
  );
}
 