import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";
import { consults } from "./consults";

class Details {
  static methods = {};

  constructor(data) {
    this.id = data.id_mascota;
    this.nombre = data.nombre;
    this.tipo_animal = data.tipo_animal;
    this.raza = data.raza_caracteristica;
    this.edad = data.edad;
    this.genero = data.genero;
    this.size = data.size;
    this.delegacion = data.direccion_delegacion;
    this.estado = data.direccion_estado;
    this.colonia = data.direccion_colonia;
    this.calle = data.direccion_calle;
    this.numext = data.direccion_numext;
    this.numint = data.direccion_numint;
    this.cp = data.direccion_cp;
    this.resena = data.resena;
    this.idImagen = data.id_imagen;
    this.link = [];
    this.idUser = data.id_usuario;
    this.telefono = data.telefono;
    this.correo = data.correo;
  }
}

Details.methods.getDetailsID = async (idMascota) => {
  try {
    const query = consults.getAllMascotaID;
    const queryImages = consults.getImagesID;
    const values = [idMascota];
    const valuesImages = [idMascota]
    const shot = await conn.query(query, values);
    const shotImages = await conn.query(queryImages,valuesImages);
    const validation = Validation.methods.isQueryResponseEmpty(shot);
    if (validation.error) return validation;
    const res = new Details(...shot.rows)
    res.link = shotImages.rows.map((element)=> element.link);
    return res;
  } catch (error) {
    return Validation.methods.newError(
      "Error en la consula",
      "Hubo un error al consultar la informacion de la mascota " +
        error
    );
  }
};

/* Details.methods.getDetailsID = async (idMascota) => {
    try {
        const query = consults.getDetailsID;
        const values = [idMascota]
        const shot  = await conn.query(query,values);
        const validation = Validation.methods.isQueryResponseEmpty(shot);
        console.table(validation.data);
        if(validation.error) return validation;
        const response = validation.data.map(
          (item) =>
            new Details({
                nombre,
                link,
                id_mascota,
                ...item,
            })
        );
        return response;
    } catch (error) {
        return Validation.methods.newError("Error en la consula","Hubo un error al consultar la informacion para la Card de busqueda "+ error);
    }
}; */

export default Details;
