import fastify = require("fastify");
import { servicosRoutes } from "./http/controllers/servicos/routes";

export const app = fastify()

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.register(servicosRoutes)