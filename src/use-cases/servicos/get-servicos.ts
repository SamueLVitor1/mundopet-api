import { servicos } from "@prisma/client";
import { ServicosRepositoryInterface } from "../../repositories/interfaces/servicos-repository.interface";


interface GetServicosUseCaseRequest {
}

interface GetServicosUseCaseResponse {
    servicos: servicos[];
}

export class GetServicosUseCase {

    constructor(
        private servicosRepository: ServicosRepositoryInterface,
    ){}

    async execute(): Promise<GetServicosUseCaseResponse> {
        const servicos = await this.servicosRepository.getAll();
        return { servicos };
    }
}