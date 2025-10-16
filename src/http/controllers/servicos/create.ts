import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaServicosRepository } from "../../../repositories/prisma/servicos-repository";
import { CreateServicosUseCase } from "../../../use-cases/servicos/create-servicos";
import { jsonSafe } from "../../../utils/json";

export async function createServicosController(request: FastifyRequest, reply: FastifyReply) {

    const schema = z.object({
        nome: z.string().min(3),
        duracaoEmMinutos: z.number().min(1),
        preco: z.number().min(0),
        ativo: z.boolean().optional().default(true),
    });

    const { nome, duracaoEmMinutos, preco, ativo } = schema.parse(request.body);

    const servicoRepo = new PrismaServicosRepository();
    const useCase = new CreateServicosUseCase(servicoRepo);

    try {
        const result = await useCase.execute({
            nome, ativo, duracaoEmMinutos, preco
        });
        return reply.status(201).send(jsonSafe(result));
    } catch (error) {
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}