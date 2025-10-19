
import { Prisma, servicos } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { ServicosRepositoryInterface } from "../interfaces/servicos-repository.interface";

export class PrismaServicosRepository implements ServicosRepositoryInterface {
    async create(data: Prisma.servicosCreateInput)  {
        const servico = await prisma.servicos.create({ data });
        return servico;
    }

    async findById(id: number) {
        const servico = await prisma.servicos.findUnique({
            where: { id_servico: id }
        });
        return servico;
    }

    async update(id: number, data: Prisma.servicosUpdateInput) {
        const servico = await prisma.servicos.update({
            where: { id_servico: id },
            data
        });
        return servico;
    }

    async getAll(){
        const servicos = await prisma.servicos.findMany();
        return servicos;
    }
}