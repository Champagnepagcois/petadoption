import "../../style/details.css";
import Image from "next/image";
import axios from "axios";

const getData = (id) => {
  return axios
    .get(`http://localhost:3000/api/detailsPet?id=${id}`)
    .then((res) => {
      console.table(res.data);
      return res.data;
    })
    .catch((err) => {
      err;
    });
};
export default async function Details({ params }) {
  const { id } = params;
  const petData = await getData(id);

  return (
    <div className="spacetop">
      <section className="section-details-pets">
        <div className="section-details-pets-container">
          <div className="section-details-pets-container-title">
            <h1>Hola!! mi nombre es {petData?.nombre}</h1>
          </div>
          <div className="section-details-pets-container-images">
            <div className="details-pets-container-images-container">
              <div className="grid-item-2">
                <Image src={"/images/uploaded/"+petData?.link[0]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-1">
                <Image src={"/images/uploaded/"+petData?.link[1]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-3">
                <Image src={"/images/uploaded/"+petData?.link[2]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-4">
                <Image src={"/images/uploaded/"+petData?.link[3]} fill={true} alt="Soy imagen" />
              </div>
              <div className="grid-item-5">
                <Image src={"/images/uploaded/"+petData?.link[4]} fill={true} alt="Soy imagen" />
              </div>
              <div className="details-pets-container-body-description grid-item-6">
                <p>{petData?.resena}</p>
              </div>
              <div className="details-pets-container-body-info grid-item-7">
                <ul>
                  <li>{petData?.estado}</li>
                  <li>{petData?.delegacion}</li>
                  <li>{petData?.size}</li>
                  <li>{petData?.genero}</li>
                  <li>{petData?.edad} meses</li>
                  <li>{petData?.telefono}</li>
                  <li>{petData?.correo}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
