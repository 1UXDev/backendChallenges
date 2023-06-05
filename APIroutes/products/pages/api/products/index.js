import { getAllProducts } from "/services/productServices.js";

export default function handler(req, res) {
  res.status(200).json(getAllProducts());
}
