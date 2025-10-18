import { servicos } from "@prisma/client";
import { ServicosRepositoryInterface } from "../../repositories/interfaces/servicos-repository.interface";

interface UpdateServicosUseCaseRequest {
  nome: string;
  duracaoEmMinutos: number;
  preco?: number;
  ativo?: boolean;
}

interface UpdateServicosUseCaseResponse {
  servicos: servicos;
}

export class UpdateServicosUseCase {
  constructor(private servicosRepository: ServicosRepositoryInterface) {}

  async execute(id: number, data: UpdateServicosUseCaseRequest): Promise<UpdateServicosUseCaseResponse> {
    const servicos = await this.servicosRepository.update(id, {
      nome: data.nome,
      duracao_min: data.duracaoEmMinutos,
      preco_centavos:
        data.preco != null ? Math.round(data.preco * 100) : undefined,
      ativo: data.ativo ,
    });
    return { servicos };
  }
}
