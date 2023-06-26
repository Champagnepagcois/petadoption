import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";
import { consults } from "./consults";

class Search {
  static methods = {};

  constructor(data) {
    this.id = data.id_mascota;
    this.estado = data.direccion_estado;
    this.delegacion = data.direccion_delegacion;
    this.nombre = data.nombre;
    this.edad = data.meses;
    this.tipo_animal = data.tipo_animal;
    this.raza = data.raza_caracteristica;
    this.size = data.size;
    this.link = data.link;
    this.resena = data.resena;
  }
}

Search.methods.getInfoCardWithParameter = async (parameter) => {
  try {
    console.log(parameter)
    const queyCard = consults.getInfoCard;
    const valueQuery = [parameter]
    const shot = await conn.query(queyCard,valueQuery);
    const validation = Validation.methods.isQueryResponseEmpty(shot);
    //console.table(validation.data);
    if (validation.error) return validation;
    const infoCards = validation.data.map(
      (item) =>
        new Search({
          ...item,
        })
    );
    //validation.name("Query successfully");
    //validation.data(infoCards);
    console.table(infoCards);
    return infoCards;
  } catch (error) {
    return Validation.methods.newError(
      "Error en la consula",
      "Hubo un error al consultar la informacion para la Card de busqueda " +
        error
    );
  }
};

Search.methods.getInfoCard = async () => {
  try {
    const queyCard = consults.getInfoCard2;
    const shot = await conn.query(queyCard);
    const validation = Validation.methods.isQueryResponseEmpty(shot);
    //console.table(validation.data);
    if (validation.error) return validation;
    const infoCards = validation.data.map(
      (item) =>
        new Search({
          ...item,
        })
    );
    //validation.name("Query successfully");
    //validation.data(infoCards);
    //console.table(infoCards);
    return infoCards;
  } catch (error) {
    return Validation.methods.newError(
      "Error en la consula",
      "Hubo un error al consultar la informacion para la Card de busqueda " +
        error
    );
  }
};

export default Search;
