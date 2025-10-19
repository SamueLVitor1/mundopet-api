import { Prisma, servicos } from "@prisma/client";
import { ServicosRepositoryInterface } from "../interfaces/servicos-repository.interface";

export class InMemoryServicosRepository implements ServicosRepositoryInterface {
  private data: servicos[] = [];
  private seq = 1;


  async create(input: Prisma.servicosCreateInput): Promise<servicos> {
    const created: servicos = {
      id_servico: BigInt(this.seq++),
      nome: input.nome as string,
      duracao_min: input.duracao_min as number,
      preco_centavos: input.preco_centavos as number,
      ativo: (input.ativo as boolean) ?? true,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };
    this.data.push(created);
    return { ...created }; 
  }

   async findById(id: number): Promise<servicos | null> {
    const found = this.data.find(s => s.id_servico === BigInt(id));
    return found ? { ...found } : null;
  }

  async update(id: number, input: Prisma.servicosUpdateInput): Promise<servicos> {
    const idx = this.data.findIndex(s => s.id_servico === BigInt(id));
    if (idx === -1) throw new Error("Serviço não encontrado");

    const current = this.data[idx];
    const updated: servicos = {
      ...current,
      nome: (input.nome ?? current.nome) as string,
      duracao_min: (input.duracao_min ?? current.duracao_min) as number,
      preco_centavos: (input.preco_centavos ?? current.preco_centavos) as number,
      ativo: (input.ativo ?? current.ativo) as boolean,
    };
    this.data[idx] = updated;
    return { ...updated };
  }

  async getAll(): Promise<servicos[]> {
    return this.data.map(s => ({ ...s }));
  }
}
