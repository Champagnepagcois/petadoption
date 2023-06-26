import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";
import { consults } from "./consults";

class Carrusel {
  static methods = {};

  constructor(data) {
    this.id = data.id_mascota;
    this.nombre = data.nombre;
    this.edad = data.edad;
    this.descripcion = data.descripcion;
    this.link = data.link;
    this.frase = data.frase;
    this.fecha_subida = data.fecha_subida;
  }
}

Carrusel.methods.getDataCarruselOfPet = async () => {
  try {
      const query = consults.getDataCarrusel;
      const shot  = await conn.query(query);
      const validation = Validation.methods.isQueryResponseEmpty(shot);
      //console.table(validation.data);
      if(validation.error) return validation;
      const response = validation.data.map(
        (item) =>
          new Carrusel({
            ...item,
          })
      );
      return response;
  } catch (error) {
      return Validation.methods.newError("Error en la consula","Hubo un error al consultar la informacion para el carrusel "+ error);
  }
};

export default Carrusel;


