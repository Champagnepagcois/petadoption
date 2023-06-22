'use client';
import React from "react";
import "../style/searchPage.css";
import CardsPetsSearch from "@/components/CardsPetsSearch";
import {useSearchParams} from 'next/navigation'
//import Search from "@/services/db/models/search";
export default async function Adoption() {
  const searchParams = useSearchParams()
  const parametro =searchParams.get('param');
if(parametro==""){
  //const DataEmptySearch = await Search.methods.getInfoCard();
}

  return (
    <>
      <section className="section-inputSearch">
        <div className="section-inputSearch-container">
          <div className="inputSearch-container">
            <select name="cars" id="cars">
              <optgroup label="Tamaño">
                <option value="xs">xs</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="xl">xl</option>
              </optgroup>
              <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </optgroup>
            </select>
            <input
              type="text"
              placeholder="Ingresa ubicacion o raza (ej. Mexico)"
            />
            <input type="button" value="Buscar"/>
            <p>{parametro}</p>
          </div>
        </div>
      </section>
      <section className="section-items">
        <div className="section-items-container">
          <div className="items-container">
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
            <CardsPetsSearch />
          </div>
        </div>
        <div className="items-pagination">
          <div className="item-pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="item-pagination-arrow">
            1/2
          </div>
          <div className="item-pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
