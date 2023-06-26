import Carrusel from "../../../services/db/models/carrusel";

export default async function carrusel(req, res) {
    const data = await Carrusel.methods.getDataCarruselOfPet();
    res.status(200).json(data);
}


/* const {MyTokenName}=req.cookies;
  if(!MyTokenName){
      return res.status(401).json({error:"No token provided"})
  }

  const user = verify(MyTokenName,'secret');
  console.log(user);
  
  return res.json({
      user:'DetailsPet'
  }); */