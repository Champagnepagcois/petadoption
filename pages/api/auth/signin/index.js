import jwt from "jsonwebtoken";
import { serialize } from "cookie";
export default function signinhandler(req, res) {
  const {correo,password} = req.body;
  if (correo==='test@gmail.com' && password ==='1234') {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
        correo: "test@test.com", //aqui colocamos el correo que esta guardado en ls DB
        //idUser:"id", //Traer el id del usuario desde la DB
      },
      "secret" //Hacer una variable de entorno
    );
    const serialized = serialize('MyTokenName', token,{
      httpOnly:true,
      secure: process.env.NODE_ENV ==='production',//Para saber si es accedible desde http / https
      sameSite:'strict', //si las peticiones salen desde el mismo sitio
      maxAge:1000*60*60*8,
      path:'/'
    });
    console.log(req.body);
    res.setHeader('Set-Cookie',serialized);
    res.status(200).json({ name: "John Doe" });
  }
  res.status(401).json({Error:"Invalid credentials"});
  
}
