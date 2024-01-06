# clarkechallenge

# API de Cosumo de Energia 🏦

Esta é uma API, em JavaScript que oferece funcionalidades para solicitar um fornecedor de enerdia a depender do consumo mensal de energia, de acordo com a necessidade do consumidor.


## Funcionalidades

- Busca de Fornecedores
## Rodando os testes

Para rodar os testes, é necessario utilizar os seguintes comandos:

```bash
npm install
  npm run dev
```
Utilizar o link do deploy:
https://tiny-pear-chinchilla-gown.cyclic.app/fornecedor pelo Insomnia

Caso o deploy não esteja mais valido acessar o http://localhost:3000/fornecedor pelo Insomnia.




## Bibliotecas utilizadas
- Express: Gerenciamento de rotas e requisições HTTP.
- pg: Driver para PostgreSQL, utilizado para conexão e manipulação do banco de dados.
- cors: Uma biblioteca Node.js que lida com a política de mesma origem (CORS) em aplicativos web. 
- dotenv: Uma ferramenta que auxilia na gestão de variáveis de ambiente em aplicativos Node.js. 
- knex: Um construtor de consultas SQL para Node.js, que oferece uma maneira elegante e intuitiva de criar consultas SQL dinâmicas e portáteis. 
- body-parser:Um middleware do Express que facilita o processamento de dados enviados nos corpos das solicitações HTTP.
## End points
- POST /fornecedor
Buscar Fornecedor:

## Banco de Dados
Foram criadas as seguintes tabelas e colunas no banco de dados PostgreSQL, podem ser melhor vizualizadas na arquivo DUMP:

**Tabela fornecedores:**
- id
- nome
- logo
- estado de origem
- custo por kWh
- limite minino de kWh
- numero total de clientes
- avaliação media dos clientes
## Autores

- [@natiialvarez](https://github.com/natiialvarez)

