import { server, chance } from "./server.js";
const PORT = 8000;

server.listen(PORT, () => {
  `Hello, my name is ${chance.name} and I am ${chance.age} years old. I am a ${chance.profession}.`;
});
