import Auth from "../../../../services/db/models/auth";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  const { nombre, telefono, correo, password } = req.body;
  const passwordHashed = await Auth.methods.hashPassword(password);
  const dataUser = new Auth({
    nombre,
    telefono,
    correo,
    password: passwordHashed,
  });
  console.log("passwordHashed: "+ passwordHashed);
  const data = await Auth.methods.createUser(dataUser);
  console.table(data);
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
      id: data.id,
      correo: data.correo,
      nombre: data.nombre,
    },
    process.env.PSWSECRETTKN
  );
  const serialized = serialize("MyTokenName", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", //Para saber si es accedible desde http / https
    sameSite: "strict", //si las peticiones salen desde el mismo sitio
    maxAge: 1000 * 60 * 60 * 8,
    path: "/",
  });
  res.setHeader("Set-Cookie", serialized);
  res.status(200).json(data);
}
