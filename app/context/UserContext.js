"use client";
import { createContext, useContext, useState } from "react";
import useLocalStorage  from "../hooks/useLocalStorage";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Debes utilizar un provider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useLocalStorage('dataUser', {
    islogged: false,
    id: "",
    nombre: "",
    correo: "",
  });

  const newSession = (id, nombre, correo) => {
    setDataUser({
      islogged: true,
      id,
      nombre,
      correo,
    });
  };

  const closeSession = () => {
    setDataUser({
      islogged: false,
      id: "",
      nombre: "",
      correo: "",
    });
  };

  return (
    <UserContext.Provider value={{ dataUser, newSession, closeSession }}>
      {children}
    </UserContext.Provider>
  );
};
