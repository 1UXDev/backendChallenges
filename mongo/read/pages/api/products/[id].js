//import { products } from "../../../lib/products";
import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const product = await Product.findById(id);

  if (!product) {
    return response.status(404).json({ status: "Not Foundy" });
  }

  response.status(200).json(product);
}
