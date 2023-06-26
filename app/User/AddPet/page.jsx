"use client";
import React from "react";
import "../../style/addPage.css";
import axios from "axios";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";

export default function NewPet() {
  const router = useRouter();
  const {dataUser}=useUser();
  const idUser = dataUser.id;
  const [inputs, setInputs] = useState([1, 2, 3, 4, 5]);

  const handleInputChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newInputs = [...inputs];
      newInputs[index] = {
        file,
        src: URL.createObjectURL(file),
      };
      setInputs(newInputs);
    }
  };

  const removeInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));

    const formData = new FormData();
    formData.append("myImage1", fields.foto1);
    formData.append("myImage2", fields.foto2);
    formData.append("myImage3", fields.foto3);
    formData.append("myImage4", fields.foto4);
    formData.append("myImage5", fields.foto4);
    formData.append("nombre", fields.nombre);
    formData.append("tipoAnimal", fields.tipoAnimal);
    formData.append("cumple", fields.cumple);
    formData.append("size", fields.size);
    formData.append("raza", fields.raza);
    formData.append("genero", fields.genero);
    formData.append("resena", fields.descripcionMascota);
    formData.append("idUser",idUser);
    formData.append("calle", fields.calle);
    formData.append("cp", fields.cp);
    formData.append("estado", fields.estado);
    formData.append("delegacion", fields.delegacion);
    formData.append("ciudad", fields.ciudad);
    formData.append("colonia", fields.colonia);
    formData.append("descripcionDireccion", fields.descripcionDireccion);
    formData.append("telefono", fields.telefono);
    formData.append("correo", fields.correo);

    const { data } = await axios.post("/api/addPet", formData);
    console.log(data);
    alert("La mascota "+ fields.nombre+" fue agregada");
    router.replace("/Search")
  };
  return (
    <div className="spacetop">
      <div className="section-add-pet">
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="container-add-pet">
            <div className="add-pet-container-head">
              <div className="add-pet-container-head-title">
                <h1>Informacion de la mascota</h1>
              </div>
              <div className="add-pet-container-head-text">
                <label htmlFor="">
                  Completa toda la informacion, para poder conseguirle una
                  familia
                </label>
              </div>
            </div>
            <div className="add-pet-container-container-body">
              <div className="add-pet-container-container-body-container-images">
                <div className="add-pet-container-container-body-container-images-title">
                  <h2>Imagen de la mascota (max 5 imagenes)</h2>
                </div>
                <div className="add-pet-container-container-body-container-images-images">
                  <div className="add-pet-container-container-body-container-images-image">
                    {inputs.map((input, index) => (
                      <div
                        key={index}
                        className="add-pet-container-container-body-container-images-image-container-input"
                      >
                        <input
                          type="file"
                          name={`foto${index+1}`}
                          onChange={(event) => handleInputChange(event, index)}
                        />
                        {input.src && (
                          <div style={{ width: "100%" }}>
                            <img src={input.src} alt="Preview" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="add-pet-container-container-body-container-inputs">
                <div className="add-pet-container-container-body-container-inputs-title">
                  <h2>Datos de la mascota</h2>
                </div>
                <div className="add-pet-container-container-body-container-inputs-container">
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Nombre de la mascota</label>
                      <input type="text" name="nombre" id="nameId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">¿Que animal es?</label>
                      <select name="tipoAnimal" id="tipoAnimalId">
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Loro">Loro</option>
                        <option value="Perico">Perico</option>
                        <option value="Canario">Canario</option>
                        <option value="Cotorra">Cotorra</option>
                        <option value="Gallina">Gallina</option>
                        <option value="Gallo">Gallo</option>
                        <option value="Pato">Pato</option>
                        <option value="Capibara">Capibara</option>
                        <option value="Conejo">Conejo</option>
                        <option value="Cobaya">Cobaya</option>
                        <option value="Jerbo">Jerbo</option>
                        <option value="Chincilla">Chincilla</option>
                        <option value="Ardilla">Ardilla</option>
                        <option value="Degu">Degu</option>
                        <option value="Huron">Huron</option>
                        <option value="Erizo">Erizo</option>
                        <option value="Araña">Araña</option>
                        <option value="Escorpion">Escorpion</option>
                        <option value="Caracol">Caracol</option>
                        <option value="Tortuga">Tortuga</option>
                        <option value="Serpiente">Serpiente</option>
                        <option value="Iguana">Iguana</option>
                        <option value="Gecko">Gecko</option>
                        <option value="Camaleon">Camaleon</option>
                        <option value="Pez">Pez</option>
                        <option value="Rana">Rana</option>
                        <option value="Sapo">Sapo</option>
                      </select>
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Fecha de nacimiento (aproximado)</label>
                      <input type="date" name="cumple" id="cumpleID" />
                    </div>
                  </div>
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Tamaño de la mascota</label>
                      <select name="size" id="razaId">
                        <option value="XX">XX</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                      </select>
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">
                        Raza o caracteristica de la mascota
                      </label>
                      <input type="text" name="raza" id="sizeId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Genero de la mascota</label>
                      <select name="genero" id="generoId">
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                      </select>
                    </div>
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
                <textarea name="descripcionMascota"></textarea>
              </div>
              <hr className="add-pet-container-container-body-container-hr" />
              <div className="add-pet-container-container-body-container-inputs">
                <div className="add-pet-container-container-body-container-inputs-title">
                  <h2>Ubicacion de la mascota</h2>
                </div>
                <div className="add-pet-container-container-body-container-inputs-container">
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">
                        ¿Quieres utilizar la informacion guardada en tu perfil?
                      </label>
                      <fieldset className="No-add-pet-container-container-body-container-input No-add-pet-radio">
                        <label>Si</label>
                        <input
                          type="radio"
                          name="sameAddress"
                          id="sameAddress"
                        />
                        <label>No</label>
                        <input
                          type="radio"
                          name="sameAddress"
                          id="sameAddress"
                        />
                      </fieldset>
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Calle y número</label>
                      <input type="text" name="calle" id="direccionId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Codigo postal</label>
                      <input type="text" name="cp" id="cpId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Estado</label>
                      <input type="text" name="estado" id="estadoId" />
                    </div>
                  </div>
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Delegacion o municipio</label>
                      <input type="text" name="delegacion" id="direccionId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Ciudad</label>
                      <input type="text" name="ciudad" id="direccionId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Colonia</label>
                      <input type="text" name="colonia" id="direccionId" />
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Referencia</label>
                      <input
                        type="text"
                        name="descripcionDireccion"
                        id="direccionId"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="add-pet-container-container-body-container-hr" />
              <div className="add-pet-container-container-body-container-inputs">
                <div className="add-pet-container-container-body-container-inputs-title">
                  <h2>Contacto de la mascota</h2>
                </div>
                <div className="add-pet-container-container-body-container-inputs-container">
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">
                        ¿Quieres utilizar la informacion guardada en tu perfil?
                      </label>
                      <fieldset className="No-add-pet-container-container-body-container-input No-add-pet-radio">
                        <label>Si</label>
                        <input
                          type="radio"
                          name="sameAddress"
                          id="sameAddress"
                        />
                        <label>No</label>
                        <input
                          type="radio"
                          name="sameAddress"
                          id="sameAddress"
                        />
                      </fieldset>
                    </div>
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Teléfono</label>
                      <input type="text" name="telefono" id="telefonoId" />
                    </div>
                  </div>
                  <div className="add-pet-container-container-body-container-inputs-column">
                    <div className="add-pet-container-container-body-container-input">
                      <label htmlFor="">Correo</label>
                      <input type="text" name="correo" id="correoId" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="add-pet-container-container-body-container-btn">
              <input type="submit" value="Agregar" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
