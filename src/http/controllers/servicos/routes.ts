import { FastifyInstance } from "fastify";
import { createServicosController } from "./create";

export async function servicosRoutes(app: FastifyInstance) {
    app.post("/servicos", createServicosController);
}