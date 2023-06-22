import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";

class Carrusel {
  static methods = {};

  constructor(data) {
    this.id_mascota = data.id_mascota;
    this.nombre = data.nombre;
    this.fecha_nacimiento = data.fecha_nacimiento;
    this.descripcion = data.descripcion;
    this.link = data.link;
    this.frase = data.frase;
    fecha_subida = data.fecha_subida;
  }
}

Carrusel.methods.getDataCarruselOfPet = async () => {
  try {
    const querypet = "SELECT id,nombre,fecha_nacimiento,descripcion FROM mascota;";
    const dataPet = await conn.query(querypet);
    const validation = Validation.methods.isQueryResponseEmpty(dataPet);
    const queryimage = "SELECT mascota.id_imagen FROM imagen_mascota WHERE id_mascota = MASCOTAID";
    const dataimage = await conn.query(queryimage);
    validation = Validation.methods.isQueryResponseEmpty(dataimage);
    if(validation.error) return validation;
  } catch (error) {
    return Validation.methods.newError("Error","Hubo un error al hacer la consulta a mascotas");
  }
  return dataPet;
};




