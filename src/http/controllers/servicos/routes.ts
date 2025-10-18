import { FastifyInstance } from "fastify";
import { createServicosController } from "./create";
import { updateServicosController } from "./update";

export async function servicosRoutes(app: FastifyInstance) {
    app.post("/servicos", createServicosController);
    app.patch("/servicos/:id", updateServicosController);
}