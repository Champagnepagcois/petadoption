import Details from "../../../services/db/models/details";

export default async function detailsPet(req, res) {
    const {id} = req.query;
    const data = await Details.methods.getDetailsID(id);
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