'use client'
import React, { useEffect } from "react";
import "../style/details.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  useEffect(()=>{
    router.back();
  },[])
  return (
    <div className="spacetop">
      <section className="section-details-pets">
        <div className="section-details-pets-container">
          <div className="section-details-pets-container-title">
            <h1></h1>
          </div>
          <div className="section-details-pets-container-images">
            <div className="details-pets-container-images-container">
              <div className="grid-item-2">
                <Image src="/images/test/1.jpg" fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-1">
                <Image src="/images/test/2.jpg" fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-3">
                <Image src="/images/test/3.jpg" fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-4">
                <Image src="/images/test/4.jpg" fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-5">
                <Image src="/images/test/1.jpg" fill={true} alt="Soy imagen" />
              </div>
              <div className="details-pets-container-body-description grid-item-6">
                <p>Descripcion del animal, donde fue encontrado o algo asi</p>
              </div>
              <div className="details-pets-container-body-info grid-item-7">
                <ul>
                  <li>Ciudad de mexico, Mexico</li>
                  <li>XS</li>
                  <li>Macho</li>
                  <li>28-10-218</li>
                  <li>55-555-555</li>
                  <li>example@test.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
