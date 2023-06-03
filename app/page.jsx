"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./style/indexPage.css";
import HomeCarruselElement from "../components/homeCarruselElement";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function IndexPage() {
  const router = useRouter();
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
      <section className="section-aboutus">
        <div className="aboutus-container">
          <div className="aboutus-container-image">
            <img
              src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="aboutus-container-text">
            <div className="aboutus-container-text-container">
              <div className="aboutus-container-text-title">
                <h1>¡Bienvenido a nuestra página de adopción de animales!</h1>
              </div>
              <div className="aboutus-container-text-text">
                <p>
                  En nuestro sitio web, nos dedicamos a promover y facilitar la
                  adopción de animales en busca de un hogar amoroso. Creemos
                  firmemente en brindar una segunda oportunidad a estos
                  maravillosos seres vivos y conectarlos con familias
                  comprometidas y responsables.
                </p>
                <p>
                  Aquí encontrarás una amplia variedad de animales disponibles
                  para adopción, desde perros y gatos hasta pequeñas mascotas
                  como conejos y hamsters. Cada uno de ellos tiene su propia
                  historia y personalidad única, esperando ansiosamente
                  encontrar un hogar lleno de cariño y cuidado. Nuestro objetivo
                  es hacer que el proceso de adopción sea fácil y transparente.
                  En nuestra página, podrás explorar perfiles detallados de los
                  animales disponibles, incluyendo información sobre su edad,
                  tamaño, nombre y una pequeña descripcion además encontrarás
                  fotos adorables que te ayudarán a conocerlos mejor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-whyus">
        <div className="whyus-content">
          <div className="why-us-content-title">
            <h1>¿Por qué adoptar con nosotros?</h1>
          </div>
          <div className="whyus-content-items">
            <div className="whyus-content-items-content">
              <div className="whyus-content-items-content-logoItem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H320V208c0-8.8-7.2-16-16-16H272z" />
                </svg>
              </div>
              <div className="whyus-content-items-content-text">
                <p>
                  Salvas una vida: Adoptar a un animal significa brindarle una
                  segunda oportunidad y salvarlo de situaciones difíciles. Al
                  elegir la adopción, estás ayudando a reducir el número de
                  animales abandonados o en refugios, y les das la oportunidad
                  de tener un hogar amoroso.
                </p>
              </div>
            </div>
          </div>
          <div className="whyus-content-items">
            <div className="whyus-content-items-content">
              <div className="whyus-content-items-content-text">
                <p>
                  Animales saludables y cuidados: Todos los animales que se
                  encuentran en nuestra página de adopción han recibido atención
                  veterinaria y cuidados adecuados. Antes de la adopción, se
                  realizan revisiones de salud, se vacunan, se esterilizan o
                  castran, y se les brinda cualquier tratamiento necesario para
                  asegurar que estén en buenas condiciones.
                </p>
              </div>
              <div className="whyus-content-items-content-logoItem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="whyus-content-items">
            <div className="whyus-content-items-content">
              <div className="whyus-content-items-content-logoItem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                </svg>
              </div>
              <div className="whyus-content-items-content-text">
                <p>
                  Variedad de opciones: En nuestra página, encontrarás una
                  amplia variedad de animales disponibles para adopción. Puedes
                  elegir entre diferentes especies, razas, tamaños y edades, lo
                  que te permite encontrar el compañero perfecto que se ajuste a
                  tu estilo de vida y preferencias.
                </p>
              </div>
            </div>
          </div>
          <div className="whyus-content-items">
            <div className="whyus-content-items-content">
              <div className="whyus-content-items-content-text">
                <p>
                  Conocimiento previo del animal: A diferencia de obtener una
                  mascota de otras formas, en nuestra página tendrás acceso a
                  información detallada sobre cada animal. Podrás conocer su
                  historia, comportamiento, necesidades especiales, nivel de
                  energía y compatibilidad con otros animales o niños. Esto te
                  ayudará a tomar una decisión informada y encontrar el animal
                  adecuado para ti.
                </p>
              </div>
              <div className="whyus-content-items-content-logoItem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-contact">
          <div className="contact-container-title">
            <h1>Contáctanos</h1>
          </div>
        <div className="contact-container">
          <div className="contact-container-content">
            <div className="contact-container-content-image">
              <img
                src="https://images.unsplash.com/photo-1501751405784-6c8590d6b897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Foto de perrito diciendo gracias"
              />
            </div>
            <div className="contact-container-content-form">
              <div className="contact-form-container">
                <form className="form" action="" method="post">
                  <div className="title">Dejanos tu mensaje</div>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Ingresa tu correo"
                    className="input"
                  />
                  <textarea placeholder="Escribe lo que quieras decirnos!!"></textarea>
                  <button>Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
