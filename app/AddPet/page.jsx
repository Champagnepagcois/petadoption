import React from "react";
import "../style/addPage.css";

export default function NewPet() {
  return (
    <div className="spacetop">
      <div className="section-add-pet">
        <div className="container-add-pet">
          <div className="add-pet-container-head">
            <div className="add-pet-container-head-title">
              <h1>Informacion de la mascota</h1>
            </div>
            <div className="add-pet-container-head-text">
              <label htmlFor="">
                Completa toda la informacion, para poder conseguirle una familia
              </label>
            </div>
          </div>
          <div className="add-pet-container-container-body">
            <div className="add-pet-container-container-body-container-images">
              <div className="add-pet-container-container-body-container-images-title">
                <h2>Imagen de la mascota (max 5 imagenes)</h2>
              </div>
              <div className="add-pet-container-container-body-container-images-images">
                <div className="add-pet-container-container-body-container-images-image"></div>
                <div className="add-pet-container-container-body-container-images-image"></div>
                <div className="add-pet-container-container-body-container-images-image"></div>
                <div className="add-pet-container-container-body-container-images-image"></div>
                <div className="add-pet-container-container-body-container-images-image"></div>
              </div>
            </div>
            <div className="add-pet-container-container-body-container-inputs">
              <div className="add-pet-container-container-body-container-inputs-column">
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Nombre de la mascota</label>
                  <input type="text" name="nombre" id="nameId" />
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">¿Que animal es?</label>
                  <input type="text" name="TipoAnimal" id="tipoAnimalId" />
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Fecha de nacimiento (aproximado)</label>
                  <input type="text" name="Cumple" id="cumpleID" />
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Tamaño de la mascota</label>
                  <input type="text" name="size" id="sizeId" />
                </div>
              </div>
              <div className="add-pet-container-container-body-container-inputs-column">
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Raza o caracteristica de la mascota</label>
                  <select name="raza" id="razaId">
                    <option value="value1">XX</option>
                    <option value="value2">L</option>
                    <option value="value3">M</option>
                    <option value="value4">S</option>
                    <option value="value5">XS</option>
                  </select>
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Genero de la mascota</label>
                  <select name="raza" id="razaId">
                    <option value="Masculino">Masculino</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Codigo postal</label>
                  <input type="text" name="Cp" id="cpId" />
                </div>
                <div className="add-pet-container-container-body-container-input">
                  <label htmlFor="">Direccion</label>
                  <input type="text" name="Direccion" id="direccionId" />
                </div>
              </div>
            </div>
            <div className="add-pet-container-container-body-container-textArea">
              <label
                htmlFor=""
                className="add-pet-container-container-body-container-textArea-title"
              >
                Escribe una pequeña reseña de la mascota
              </label>
              <textarea></textarea>
              <div className="add-pet-container-container-body-container-btn">
                <input type="button" value="Agregar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
