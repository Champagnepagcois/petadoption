import Search from "../../../services/db/models/search";

export default async function handler(req, res) {
    /* if(req.query.parameter!=undefined){
      res.status(500).json("Hola")
    } */
    console.table(req.values);
    const data = await Search.methods.getInfoCard();
    res.status(200).json(data);
  }