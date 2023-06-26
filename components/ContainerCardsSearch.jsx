"use client";
import React from "react";
import CardsPetsSearch from "./CardsPetsSearch";
import { useRouter } from "next/navigation";
import { useUser } from "../app/context/UserContext";
import AddCardPet from "../components/AddCardPet"

export default function ContainerCardsSearch({ petDataCards }) {
  const { dataUser } = useUser();
  const islogged = dataUser.islogged;
  return (
    <div className="items-container">
      {islogged ? <AddCardPet /> : <></>}
      {petDataCards?.map((element) => (
        <CardsPetsSearch
          key={element.id}
          id={element.id}
          link={element.link}
          tipoAnimal={element.tipo_animal}
          nombre={element.nombre}
          estado={element.estado}
          delegacion={element.delegacion}
          raza={element.raza}
          edad={element.edad}
          size={element.size}
        />
      ))}
    </div>
  );
}
