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

- OpenWeather API - Para dados climáticos externos

<br>

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/climate-control-plus.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env baseado no .env.example

# Execute as migrações do banco
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
```

<br>

## Autores
- [@Victor-Lis](https://github.com/Victor-Lis)
