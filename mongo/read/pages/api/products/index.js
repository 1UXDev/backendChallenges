//import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData); // create new Object using the Productmodel from the POST-Data
      // this create the document in MongoDB
      product.save();

      //  This method is shorter, but not creating a new Object
      // wait Product.create(productData)  // with a new object we could alter it the way we need

      response.status(201).json({ status: "Product created" });
    } catch (e) {
      response.status(400).json({ error: error.message });
    }
  }
}
/*
POST and GET are 2 different routes because the combination of argument and URL is different:
  GET /api/products/index.js
  POST /api/products/index.js

POST-Requests can only be used with a HTML Form or specialized tools:
  Insomnia
  Postman

  Post http://localhost:3000/api/products
    >  Key         >  Value
    >> product     >> new product
    >> price       >> 50


You could also destructure the request body
const productData = request.body
const {product} = request.body  // Why tho? to see what is inside probably...

The HTML-Form Field "name" Attributes, have to match the corresponding names in the database


in the Form:
const products = useSWR("/api/products")
return(
  async function handleSubmit(event){
    event.preventDefault()

    const formData= new FormData(event.target)
    // Creating new Form Object

    ...

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productData)
      ...
    })
  }

  // if response ok -> call mutate on products
    // if we do not mutate, its not immediately visible
    // event.target.reset
  // else catch error and log
    // response.status(400).json({status: error.message})

    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="price" />
    </form>
)


// Controlled and Uncontrolled Components
// SWR Mutation and revalidation
// OPtimistic UI Update with SWR -> We Update Data for Client and only if the write to DB didnt work, we rewind this UI Change 

*/
