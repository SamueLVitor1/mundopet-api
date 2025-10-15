import { Prisma, servicos } from "../../generated/prisma";
import { ServicosRepositoryInterface } from "../interfaces/servicos-repository.interface";

export class PrismaServicosRepository implements ServicosRepositoryInterface {
    create(data: Prisma.servicosCreateInput): Promise<servicos> {
        throw new Error("Method not implemented.");
    }
}