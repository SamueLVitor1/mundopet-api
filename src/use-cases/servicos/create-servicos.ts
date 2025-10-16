import { servicos } from "@prisma/client";
import { ServicosRepositoryInterface } from "../../repositories/interfaces/servicos-repository.interface";

interface CreateServicosRequest {
  nome: string;
  duracaoEmMinutos: number;
  preco?: number;
  ativo?: boolean;
}

interface CreateServicosResponse {
  servicos: servicos;
}

export class CreateServicosUseCase {
  constructor(private servicosRepository: ServicosRepositoryInterface) {}

  async execute(data: CreateServicosRequest): Promise<CreateServicosResponse> {
    const servicos = await this.servicosRepository.create({
      nome: data.nome,
      duracao_min: data.duracaoEmMinutos,
      preco_centavos:
        data.preco != null ? Math.round(data.preco * 100) : undefined,
      ativo: data.ativo ?? true,
    });
    return { servicos };
  }
}
