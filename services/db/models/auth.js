import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";

class Auth {
  static methods = {};

  constructor(data) {
    this.id_mascota = data.id_mascota;
    this.nombre = data.nombre;
    this.tipo_animal = data.tipo_animal;
    this.raza_caracteristica = data.raza_caracteristica;
    this.fecha_nacimiento = data.fecha_nacimiento;
    this.genero = data.genero;
    this.size = data.size;
    this.direccion_pais = data.direccion_pais ;
	this.direccion_estado = data.direccion_estado ;
	this.direccion_colonia = data.direccion_colonia ;
	this.direccion_calle = data.direccion_calle ;
	this.direccion_numext = data.direccion_numext ;
	this.direccion_numint = data.direccion_numint ;

    this.descripcion= data.descripcion;
    this.link = data.link;
  }
};

Auth.methods.signin = async () => {
    try {
        const queryLogin = "SELECT id_usuario,nombre,correo,password FROM has"
    } catch (error) {
        
    }
}

Auth.methods.getInfoCard = async () => {
    try {
        const queyCard = "SELECT * FROM mascota WHERE id_mascota = IDMASCOTA JOIN IMAGEN DE LA MASCOTA";
        const validation = Validation.methods.isQueryResponseEmpty(queyCard);
        return validation;
    } catch (error) {
        return Validation.methods.newError("Error en la consula","Hubo un error al consultar la descrpcion de la mascota");
    }
};