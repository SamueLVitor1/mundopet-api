import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaServicosRepository } from "../../../repositories/prisma/servicos-repository";
import { GetServicosUseCase } from "../../../use-cases/servicos/get-servicos";
import { jsonSafe } from "../../../utils/json";
import { toServicoResponse } from "../../../utils/servicos-mapper";

export  async function getAllServicosController(request: FastifyRequest, reply: FastifyReply) {

    const servicosRepo = new PrismaServicosRepository();
    const getServicosUseCase = new GetServicosUseCase(servicosRepo);

    try {
        const result = await getServicosUseCase.execute();
        reply.send(jsonSafe(result.servicos.map(toServicoResponse)));
    } catch (error) {
        reply.status(500).send({ error: "Internal Server Error" });
    }
}