const knex = require('../banco de dados/conexao');

const procuraDeFornecedor = async (req, res) => {
    const { consumo_mensal, } = req.body
    if (!consumo_mensal) {
        return res.status(400).json({ mensagem: "Necessário informar o consumo mensal" })
    }
    try {
        const provavelFornecedor = await knex('fornecedores')
            .select('*')
            .where('limite_minimo_kwh', '<=', consumo_mensal)

        if (!provavelFornecedor || provavelFornecedor.length === 0) {
            return res.status(404).json({ mensagem: "Não foi possivel encontrar um fornecedor que atenda o consumo mensal" })
        }

        return res.status(200).json(provavelFornecedor)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    procuraDeFornecedor
}