import { servicos } from '@prisma/client';

export function toServicoResponse(data: servicos) {
  return {
    id: data.id_servico,
    nome: data.nome,
    preco: data.preco_centavos / 100,
    duracaoEmMinutos: data.duracao_min,
    ativo: data.ativo,
    criadoEm: data.criado_em,
    atualizadoEm: data.atualizado_em,
  };
}
