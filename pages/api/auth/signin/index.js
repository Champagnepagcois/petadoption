import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import Auth from "../../../../services/db/models/auth";
import { Validation } from "../../../../services/db/models/Validation";

export default async function signinhandler(req, res) {
  try {
    const { correo, password } = req.body;
    
    const user = await Auth.methods.getCredentialByEmail(correo);
    //console.table(user);
    user.data = user.data[0];
    if (user.data.error) return res.status(401).json(user.data);
    const match = await Auth.methods.comparePassword(
      password,
      user.data.password
    );
    if (match.error) return res.status(401).json(match);
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
        id: user.data.id,
        correo: user.data.correo,
        nombre: user.data.nombre,
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
    console.table(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ Error: "Invalid credentials" });
  }

  /*   if (correo === "test@gmail.com" && password === "1234") {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
        correo: "test@test.com",
        otroDato: "Random", //aqui colocamos el correo que esta guardado en ls DB
        //idUser:"id", //Traer el id del usuario desde la DB
      },
      "secret" //Hacer una variable de entorno
    );

    const serialized = serialize("MyTokenName", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", //Para saber si es accedible desde http / https
      sameSite: "strict", //si las peticiones salen desde el mismo sitio
      maxAge: 1000 * 60 * 60 * 8,
      path: "/",
    });
    console.log(req.body);
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ name: "Lognin completed" });
  } */
}
