"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleQuey();
    }
  };
  const handleQuey = () => {
    router.replace(`/Search?query=${query}`)
    console.log("Empieza la busqueda");
  };
  return (
    <section className="section-inputSearch">
      <div className="section-inputSearch-container">
        <div className="inputSearch-container">
          <input
            type="text"
            placeholder="Ingresa ubicacion o raza (ej. Mexico)"
            value={query}
            onChange={handleChangeQuery}
            onKeyDown={handleQuey}
          />
          <input type="button" value="Buscar" onClick={handleQuey} />
        </div>
      </div>
    </section>
  );
}
