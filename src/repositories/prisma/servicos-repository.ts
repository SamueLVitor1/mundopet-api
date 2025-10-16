
import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { ServicosRepositoryInterface } from "../interfaces/servicos-repository.interface";

export class PrismaServicosRepository implements ServicosRepositoryInterface {
    async create(data: Prisma.servicosCreateInput)  {
        const servico = await prisma.servicos.create({ data });
        return servico;
    }
}