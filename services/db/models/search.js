import { cookies } from "next/dist/client/components/headers";
import conn from "../config";
import { Validation } from "./Validation";

class Search {
  static methods = {};

  constructor(data) {
    this.id_mascota = data.id_mascota;
    this.nombre = data.nombre;
    this.tipo_animal = data.tipo_animal;
    this.raza_caracteristica = data.raza_caracteristica;
    this.fecha_nacimiento = data.fecha_nacimiento;
    this.link = data.link;
  }
};

//const queyCard = await "SELECT mascota.id_mascota, mascota.direccion_estado, mascota.direccion_pais, mascota.nombre, mascota.fecha_nacimiento, mascota.tipo_animal, mascota.raza_caracteristica, mascota.size, imagen.link, imagen.id_imagen  FROM mascota INNER JOIN imagen ON imagen.id_mascota = mascota.id_mascota";

Search.methods.getInfoCard = async () => {
    try {
        const queyCard = await "SELECT mascota.id_mascota, mascota.direccion_estado, mascota.direccion_pais, mascota.nombre, mascota.fecha_nacimiento, mascota.tipo_animal, mascota.raza_caracteristica, mascota.size,  FROM mascota";
        const shot  = await conn.query(queyCard);
        const validation = Validation.methods.isQueryResponseEmpty(shot);
        if(validation.error) return validation;
        const infoCards = queyCard.map(
          (item) =>
            new Search({
              ...item,
            })
        )
        validation.name("Query successfully");
        validation.data(queyCard);
        return validation;
    } catch (error) {
        return Validation.methods.newError("Error en la consula","Hubo un error al consultar la informacion para la Card de busqueda");
    }
};
/**
  *Example join tables search
 SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
 */
export default Search;