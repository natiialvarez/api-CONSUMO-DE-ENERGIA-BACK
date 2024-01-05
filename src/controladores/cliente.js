const knex = require('../banco de dados/conexao');

const procuraDeFornecedor = async (req, res) => {
    const { nome, consumo_mensal, estado } = req.body
    if (!consumo_mensal) {
        return res.status(400).json({ mensagem: "Necessário informar o consumo mensal" })
    }
    try {
        const provavelFornecedor = await knex('fornecedores')
            .select('*')
            .where('limite_minimo_kwh', '<=', consumo_mensal)

        if (!provavelFornecedor || provavelFornecedor.length === 0) {
            return res.status(200).json({ mensagem: "Não foi possivel encontrar um fornecedor que atenda o consumo mensal" })
        }
        const nomesFornecedores = provavelFornecedor.map(empresa => empresa.nome)

        const clienteDados = {
            nome,
            consumo_mensal,
            estado,
            provavel_fornecedor: nomesFornecedores.join(', ')
        }
        const fornecedoresParaOCliente = await knex('cliente')
            .insert(clienteDados)

        return res.status(200).json({ mensagem: `Os fornecedores encontrados foram: ${JSON.stringify(provavelFornecedor)}` })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    procuraDeFornecedor
}