import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaServicosRepository } from "../../../repositories/prisma/servicos-repository";
import { CreateServicosUseCase } from "../../../use-cases/servicos/create-servicos";

export async function createServicosController(request: FastifyRequest, reply: FastifyReply) {

    const schema = z.object({
        nome: z.string().min(3),
        duracao: z.number().min(1),
        preco: z.number().min(0),
        ativo: z.boolean().optional().default(true),
    });

    const { nome, duracao, preco, ativo } = schema.parse(request.body);

    const servicoRepo = new PrismaServicosRepository();
    const useCase = new CreateServicosUseCase(servicoRepo);

    try {
        const result = await useCase.execute({
            nome, ativo, duracao_min: duracao, preco_centavos: preco
        });
        return reply.status(201).send(result);
    } catch (error) {
        return reply.status(500).send({ error: "Internal Server Error" });
    }
}