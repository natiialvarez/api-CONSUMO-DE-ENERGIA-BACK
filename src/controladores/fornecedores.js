const knex = require('../banco de dados/conexao');

const inserirFornecedor = async (req, res) => {
    const { nome, estado_de_origem, logo, custo_por_kwh, limite_minimo_kwh, numero_total_de_clientes, avaliacao_media_dos_clientes } = req.body

    if (!nome || !estado_de_origem || !logo || !custo_por_kwh || !limite_minimo_kwh) {
        return res.status(400).json('Os campos nome, estade de origem, logo, custo por kwh e o limite minimo são obrigatórios')
    }
    try {
        const nomeFornecedor = await knex('fornecedores').where({ nome }).first()

        if (nomeFornecedor) {
            return res.status(400).json('O fornecedor já esta cadastrado')
        }

        const fornecedor = {
            nome,
            logo,
            estado_de_origem,
            custo_por_kwh,
            limite_minimo_kwh,
            numero_total_de_clientes,
            avaliacao_media_dos_clientes,
        }
        await knex('fornecedores').insert(fornecedor);
        console.log(fornecedor)

        return res.status(201).json('Fornecedor inserido com sucesso');
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

}

module.exports = inserirFornecedor