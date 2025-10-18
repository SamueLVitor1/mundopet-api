import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaServicosRepository } from "../../../repositories/prisma/servicos-repository";
import { jsonSafe } from "../../../utils/json";
import { toServicoResponse } from "../../../utils/servicos-mapper";
import { UpdateServicosUseCase } from "../../../use-cases/servicos/update-servicos";

export async function updateServicosController(request: FastifyRequest, reply: FastifyReply) {

    const schema = z.object({
        nome: z.string().min(3),
        duracaoEmMinutos: z.number().min(1),
        preco: z.number().min(0),
        ativo: z.boolean().optional().default(true),
    });

    const paramsSchema = z.object({
        id: z.string().transform(Number),
    });

    const { id } = paramsSchema.parse(request.params);
    const { nome, duracaoEmMinutos, preco, ativo } = schema.parse(request.body);

    const servicoRepo = new PrismaServicosRepository();
    const useCase = new UpdateServicosUseCase(servicoRepo);

    try {
        const result = await useCase.execute(id, {
            nome, ativo, duracaoEmMinutos, preco
        });
        return reply.status(200).send(jsonSafe(toServicoResponse(result.servicos)));
    } catch (error) {
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}