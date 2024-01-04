CREATE TABLE fornecedores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  logo VARCHAR(255),
  estado_de_origem VARCHAR(255),
  custo_por_kWh DECIMAL(10, 3), 
  limite_minimo_kWh INT, 
  numero_total_de_clientes INT, 
  avaliacao_media_dos_clientes DECIMAL(3, 1)
);

CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  consumo_mensal DECIMAL(10,3) NOT NULL,
  provavel_fornecedor VARCHAR (255),	
  fornecedor VARCHAR(255)
  )


