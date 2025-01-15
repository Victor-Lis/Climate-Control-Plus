# Climate Control Plus 🌡️

Um sistema web para monitoramento e análise de temperatura e umidade em ambientes internos, desenvolvido como projeto escolar.

<br>

## 📋 Sobre o Projeto

O Climate Control Plus é uma aplicação web que permite monitorar e analisar as condições climáticas de diferentes cômodos, comparando dados internos com externos. O sistema coleta e armazena:

- Temperatura interna e externa do ambiente
- Umidade interna e externa do ambiente 
- Histórico temporal das medições
- Informações sobre os cômodos monitorados

<br>

## 🚀 Funcionalidades

- Cadastro e gerenciamento de cômodos
- Registro de medições de temperatura e umidade
- Visualização em tempo real dos dados
- Gráficos comparativos entre ambiente interno e externo
- Histórico completo das medições
- Interface responsiva e intuitiva

<br>

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Linguagem
- [Prisma](https://www.prisma.io/) - ORM
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Chart.js](https://www.chartjs.org/) - Biblioteca de gráficos
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários
- [Axios](https://axios-http.com/) - Cliente HTTP

<br>

## 🌐 APIs Integradas

- [OpenWeather API](https://openweathermap.org/) - Para dados climáticos externos

<br>

## 📋 Estrutura do Projeto
```bash
├── src/
│   ├── @types/         # Definições de tipos TypeScript
│   ├── app/           # Componentes e páginas Next.js
│   │   ├── api/      # Rotas da API
│   │   ├── cadastro/ # Páginas de cadastro
│   │   ├── delete/ # Página de exclusão
│   │   └── components/ # Componentes React reutilizáveis
│   ├── lib/          # Configurações (Prisma, Axios)
│   └── utils/        # Funções utilitárias
├── prisma/           # Configuração do banco de dados
└── public/          # Arquivos estáticos
```

## 🔧 Exemplo do .env
```bash
# URL do banco de dados PostgreSQL
DATABASE_URL="postgres://user:password@host:port/database"

# URL base da aplicação
HOST_URL="http://localhost:3000"

# Chave da API OpenWeather
OPEAN_WEATHER_API_KEY="sua_chave_aqui"
```

<br>

## 👀 Veja você mesmo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/climate-control-plus.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env

# Execute as migrações do banco
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
```

### [🌐 Deploy ao vivo](https://climate-control-plus-by-dev-victor.vercel.app/) - Fora do Ar

<br>

## Autores
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo/)
