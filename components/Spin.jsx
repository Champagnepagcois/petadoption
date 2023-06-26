import React from "react";
import "../app/style/spin.css"
import Image from "next/image";
import uno from "../public/images/spin/1.webp";
import dos from "../public/images/spin/2.webp";
import tres from "../public/images/spin/3.webp";
import cuatro from "../public/images/spin/4.webp";

export default function Spin() {
  return (
    <>
      <div class="load">
        <Image src={uno} fill={true} alt="Imagen de animal"/>
        <Image src={dos} fill={true} alt="Imagen de animal"/>
        <Image src={tres} fill={true} alt="Imagen de animal"/>
        <Image src={cuatro} fill={true} alt="Imagen de animal"/>
      </div>
    </>
  );
}
