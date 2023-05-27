"use client";
import React from "react";
import "./style/indexPage.css";
import HomeCarruselElement from "../components/homeCarruselElement";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function IndexPage() {
  return (
    <div className="spacetop">
      <section className="section-index">
        <div className="index-background-image">
          <Splide
            hasTrack={false}
            options={{ rewind: true, height: "calc(100vh - 80px)" }}
          >
            <SplideTrack>
              <SplideSlide>
                <HomeCarruselElement
                  imgurl={
                    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  }
                  nombre={"Chimuelo"}
                  message={"La adopcion de mascotas es lo mejor para todos..."}
                  edad={15}
                  descripcion={
                    "Soy un perrito cariñoso que le gusta salir a pasear, el pollito y dormir 14 horas diarias"
                  }
                  id={0}
                />
              </SplideSlide>
              <SplideSlide>
                <HomeCarruselElement
                  imgurl={
                    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  }
                  nombre={"Chimuelo"}
                  message={"La adopcion de mascotas es lo mejor para todos.."}
                  edad={15}
                  descripcion={
                    "Soy un perrito cariñoso que le gusta salir a pasear, el pollito y dormir 14 horas diarias"
                  }
                  id={0}
                />
              </SplideSlide>
              <SplideSlide>
                <HomeCarruselElement
                  imgurl={"https://picsum.photos/200"}
                  nombre={"Chimuelo"}
                  message={"La adopcion de mascotas es lo mejor para todos.."}
                  edad={15}
                  descripcion={
                    "Soy un perrito cariñoso que le gusta salir a pasear, el pollito y dormir 14 horas diarias"
                  }
                  id={0}
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </section>
      <section className="section-decoration">
        <div className="decoration-container">
          <div className="decoration-container-left">
            <div className="bubblepet bubble-l-d">
              <img
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="bubblepet bubble-l-u">
              <img
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="decoration-container-center">
            <p>
              Todo tipo de animalito <br></br>para todo tipo de gusto
            </p>
          </div>
          <div className="decoration-container-right">
            <div className="bubblepet bubble-r-d">
              <img
                src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="bubblepet bubble-r-u">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-aboutus">abcd</section>
    </div>
  );
}
