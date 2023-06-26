import bcrypt from "bcrypt";
import { createHash } from "crypto";
import conn from "../config";
import { Validation } from "./Validation";
import { consults } from "./consults";

class Auth {
  static methods = {};

  constructor(data) {
    this.id = data.id_usuario || "";
    this.nombre = data.nombre || "";
    this.correo = data.correo || "";
    this.calle = data.calle || "";
    this.telefono = data.telefono || "";
    this.pais = data.pais || "";
    this.estado = data.estado || "";
    this.colonia = data.colonia || "";
    this.password = data.password || "";
    this.ciudad = data.ciudad || "";
    this.cp = data.cp || "";
    this.delegacion = data.delegacion || "";
    this.referencia = data.referencia || "";
  }
}

Auth.methods.hashPassword = async (password) => {
  const sha512hashedPassword = createHash("sha512")
    .update(password)
    .digest("hex");
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(sha512hashedPassword, salt);
};

Auth.methods.comparePassword = async (password, hashedPassword) => {
  const sha512hashedPassword = createHash("sha512").update(password).digest("hex");
  return bcrypt.compare(sha512hashedPassword, hashedPassword);
};


Auth.methods.createUser = async (data) => {
  try {
    const { nombre, telefono, correo, password } = data;
    const indat = [nombre, correo, telefono, password];
    const queryUser = consults.insertUser;
    const shot = await conn.query(queryUser, indat);
    const dataUser = new Auth({
      id_usuario: shot.rows[0].id,
      ...shot.rows[0],
    });
    const res = Validation.methods.newMessage(
      "Query Successfully",
      "Query Successfully",
      dataUser
    );
    if (shot.rows[0] == undefined) return new Validation(shot);
    return res;
  } catch (error) {
    return Validation.methods.newError(
      "Error en la consula",
      "Hubo un error al consultar las credenciales " + error
    );
  }
};

Auth.methods.getCredentialByEmail = async (email) => {
  try {
    const queyCard = consults.getCredentialByEmail;
    const values = [email];
    const shot = await conn.query(queyCard, values);
    const validation = Validation.methods.isQueryResponseEmpty(shot);
    if (validation.error) return validation;
    return validation;
  } catch (error) {
    return Validation.methods.newError(
      "Error en la consula",
      "Hubo un error al consultar las credenciales " + error
    );
  }
};


export default Auth;
