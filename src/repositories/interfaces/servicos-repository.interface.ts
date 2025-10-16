import { Prisma, servicos } from "@prisma/client";


export interface ServicosRepositoryInterface {
   create(data: Prisma.servicosCreateInput): Promise<servicos>;
}
