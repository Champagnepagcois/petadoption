import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";
import { consults } from "./consults";

class Pet {
  static methods = {};

  constructor(data) {
    this.id = data.id_mascota;
    this.nombre = data.nombre;
    this.tipoAnimal = data.tipo_animal;
    this.cumple = data.fecha_nacimiento;
    this.size = data.size;
    this.raza = data.raza_caracteristica;
    this.genero = data.genero;
    this.descripcionMascota = data.descripcion;
    this.idUser = data.id_usuario;
    this.calle = data.direccion_calle;
    this.cp = data.direccion_cp;
    this.estado = data.direccion_estado;
    this.delegacion = data.direccion_delegacion;
    this.ciudad = data.direccion_ciudad;
    this.colonia = data.direccion_colonia;
    this.descripcionDireccion = data.direccion_descripcion;
    this.telefono = data.telefono;
    this.correo = data.correo;
  }
}

Pet.methods.insertPet = async (petData) => {
  try {
    const {
      nombre,
      tipoAnimal,
      raza,
      cumple,
      genero,
      size,
      idUser,
      calle,
      cp,
      estado,
      delegacion,
      ciudad,
      colonia,
      descripcionDireccion,
      telefono,
      correo,
      resena,
    } = petData;
    //console.log(tipoAnimal);
    const valuesInserPet = [
      nombre,
      tipoAnimal,
      raza,
      cumple,
      genero,
      size,
      idUser,
      calle,
      cp,
      estado,
      delegacion,
      ciudad,
      colonia,
      descripcionDireccion,
      telefono,
      correo,
      resena
    ];
    console.table(valuesInserPet);
    const queryInsert = consults.insertPet;
    const shot = await conn.query(queryInsert, valuesInserPet);
    const idPet = shot.rows[0].id_mascota;
    console.table(idPet)
    const queryInserImage = consults.insertImage;
    for (const element of petData.link) {
        await conn.query(queryInserImage,[element,idPet]);
    }
    console.log("Images Inserted")
    return new Validation.methods.newMessage("Success","Query successfully","none");
  } catch (error) {
    return Validation.methods.newError(
        "Error en la consula",
        "Hubo un error al Introducir informacion " + error
      );
  }
};



export default Pet;
