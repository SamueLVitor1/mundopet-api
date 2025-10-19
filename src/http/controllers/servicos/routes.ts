import { FastifyInstance } from "fastify";
import { createServicosController } from "./create";
import { updateServicosController } from "./update";
import { getAllServicosController } from "./get-all";

export async function servicosRoutes(app: FastifyInstance) {
    app.get("/servicos", getAllServicosController)
    app.post("/servicos", createServicosController);
    app.patch("/servicos/:id", updateServicosController);
}