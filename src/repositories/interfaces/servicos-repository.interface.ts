import { Prisma, servicos } from '../../generated/prisma'

export interface ServicosRepositoryInterface {
   create(data: Prisma.servicosCreateInput): Promise<servicos>;
}
