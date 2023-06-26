"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";
import axios from "axios";

export default function page() {
  const router = useRouter();
  const {closeSession} = useUser();

  useEffect(() => {
    axios
      .post("/api/auth/logout")
      .then((res) => {
        closeSession();
        alert("Cerraste sesion");
        router.replace("/Search");
      })
      .catch((err) => {
        console.log("Error al cerrar sesion" + err);
      });
  }, []);
  return (
    <div>
      <h1>logout</h1>
    </div>
  );
}
