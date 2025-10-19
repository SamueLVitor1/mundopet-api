import { Prisma, servicos } from "@prisma/client";

export interface ServicosRepositoryInterface {
   create(data: Prisma.servicosCreateInput): Promise<servicos>;
   findById(id: number): Promise<servicos | null>;
   update(id: number, data: Prisma.servicosUpdateInput): Promise<servicos>;
   getAll(): Promise<servicos[]>;
}
