import { servicos } from "../../generated/prisma";
import { ServicosRepositoryInterface } from "../../repositories/interfaces/servicos-repository.interface";

interface CreateServicosRequest {
  nome: string;
  duracao_min: number; 
  preco_centavos?: number; 
  ativo?: boolean;
}

interface CreateServicosResponse {
  servicos: servicos;
}

export class CreateServicosUseCase {
  constructor(private servicosRepository: ServicosRepositoryInterface) {}

  async execute(data: CreateServicosRequest): Promise<CreateServicosResponse> {
    const servicos = await this.servicosRepository.create(data);
    return { servicos };
  }
}
