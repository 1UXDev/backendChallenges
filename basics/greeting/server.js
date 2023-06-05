import { createServer } from "node:http";

export const server = createServer((req, res) => {
  const name = req.url;
  res.statusCode = 200;
  res.end(`Hello, ${name}`);
});
