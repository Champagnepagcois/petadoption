"use client";
import React from "react";
import "../app/style/header.css";
import UserImage from "../public/images/home/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../app/context/UserContext";

export default function NavBar() {
  const router = useRouter();
  const { dataUser } = useUser();
  const [query, setQuery] = useState("");

  const islogged = dataUser.islogged;
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
    console.log("Empieza la busqueda");
    router.replace(`/Search?search=${query}`);
  };

  return (
    <>
      <header className="header-desktop">
        <div className="header-image">
          <Image
            src="/images/home/logo.png"
            width={70}
            height={70}
            alt="Logo de la pagina"
          />
        </div>
        <div className="header-container-buttons">
          <div className="container-buttons-center">
            <Link href="/">Inicio</Link>
            <Link href="/Search">Adoptar</Link>
          </div>
        </div>
        <div className="header-container-right">
          <div className="header-searchbar">
            <div className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Type anything"
                onChange={handleChangeQuery}
                onKeyDown={handleKeyDown}
              />
              <button className="search__button" onClick={handleQuey}>
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="header-container-profile">
            {islogged ? (
              <Link href="/logout">{dataUser.nombre[0]}</Link>
            ) : (
              <Link href="/Auth">?</Link>
            )}
          </div>
        </div>
      </header>
      <header className="header-phone">
        <div className="header-image">
          <Image
            src="/images/home/logo.png"
            width={70}
            height={70}
            alt="Logo de la pagina"
          />
        </div>
        <div className="header-container-buttons">
          <div className="container-buttons-center">
            <Link href="/">Inicio</Link>
            <Link href="/Search">Adopta</Link>
          </div>
        </div>
        <div className="header-container-right">
          <div className="header-searchbar">
            <div className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Type anything"
              />
              <button className="search__button">
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="header-container-profile">
            {islogged ? (
              <Link href="/logout">{dataUser.nombre[0]}</Link>
            ) : (
              <Link href="/Auth">?</Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
