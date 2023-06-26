import Search from "../../../services/db/models/search";

export default async function handler(req, res) {
  console.table(req.query.query);
  let data = null;
  if (req.query.query) {
    data = await Search.methods.getInfoCardWithParameter(req.query.query);
  } else {
    data = await Search.methods.getInfoCard();
  }
  res.status(200).json(data);
}
