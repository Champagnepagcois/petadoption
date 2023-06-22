import "../../style/details.css";
import Image from "next/image";
import Description from "@/services/db/models/description";



export default async function Details() {
  //const petData = await Description.methods.getInfoPet();
  return (
    <div className="spacetop">
      <section className="section-details-pets">
        <div className="section-details-pets-container">
          <div className="section-details-pets-container-title">
            <h1>Hola!! mi nombre es {petData.data.nombre}</h1>
          </div>
          <div className="section-details-pets-container-images">
            <div className="details-pets-container-images-container">
              <div className="grid-item-2">
                <Image src={petData.data.link[0]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-1">
                <Image src={petData.data.link[1]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-3">
                <Image src={petData.data.link[2]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-4">
                <Image src={petData.data.link[3]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-5">
                <Image src={petData.data.link[4]} fill={true} alt="Soy imagen" />
              </div>
              <div className="details-pets-container-body-description grid-item-6">
                <p>{petData.data.descripcion}</p>
              </div>
              <div className="details-pets-container-body-info grid-item-7">
                <ul>
                  <li>{petData.data.direccion_estado}</li>
                  <li>{petData.data.size}</li>
                  <li>{petData.data.genero}</li>
                  <li>{petData.data.fecha_nacimiento}</li>
                  <li>{petData.data.telefono}</li>
                  <li>{petData.data.correo}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
