import { describe, it, expect } from 'vitest';
import { CreateServicosUseCase } from './create-servicos';

class FakeServicosRepo {
  async create(data: any) {
    return { id_servico: 1, ...data };
  }
}

describe('CreateServicosUseCase', () => {
  it('deve criar um serviço convertendo preço para centavos e duração corretamente', async () => {
    const fakeRepo = new FakeServicosRepo();
    const useCase = new CreateServicosUseCase(fakeRepo);

    const result = await useCase.execute({
      nome: 'Test Service',
      duracaoEmMinutos: 60,
      preco: 100,
      ativo: true,
    });

    expect(result.servicos).toEqual({
      id_servico: 1,
      nome: 'Test Service',
      duracao_min: 60,
      preco_centavos: 10000, 
      ativo: true,
    });
  });
});
