🐾 MundoPet API

MundoPet API é o backend do sistema de agendamento de serviços para petshops.
Ele permite gerenciar clientes, pets, funcionários, serviços e agendamentos, fornecendo uma base sólida para integração com o frontend (web ou mobile).

Tecnologias
- Node.js + TypeScript
- Fastify (servidor HTTP)
- Prisma ORM (PostgreSQL)
- Zod (validação de dados)
- Dotenv (gerenciamento de variáveis de ambiente)

Estrutura do Projeto

```tree
src/
├── app.ts              # configuração do Fastify
├── server.ts           # inicialização do servidor
├── env/                # carregamento e validação das variáveis de ambiente
├── lib/                # instâncias globais (ex: Prisma)
├── http/               # controladores e rotas HTTP
├── repositories/       # camada de acesso a dados
├── use-cases/          # lógica de negócio (serviços)
├── dto/                # schemas de entrada e saída
├── utils/              # funções auxiliares
└── prisma/             # schema.prisma e migrations
```
Instalação e Execução
1) Clone o repositório
```bash
git clone https://github.com/SamuelV1tor1/mundopet-api.git
cd mundopet-api
```
2) Instale as dependências
```bash
npm install
```

3) Configure o .env
```bash
PORT=3333
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=mundopet"
NODE_ENV=development
```

4) Configure o Prisma
```bash
npx prisma db pull   # importar tabelas já existentes
npx prisma generate  # gerar client Prisma
```

5) Rode o servidor
```bash
npm run dev
```
