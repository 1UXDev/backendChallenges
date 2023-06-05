import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const data = getProductById(id);

  console.log(data);

  if (!data) {
    return res.status(404).json({ message: "nothing found" });
  }
  res.status(200).json(data);
}
