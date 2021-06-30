// Schema de vendas
const Vendas = {
    type: 'object',
    properties: {
        loja: { type: 'string' },
        vendas: { type: 'number' },
        meta_valor: { type: 'number' },
        meta_prod_clt: { type: 'number' },
        q_produtos: { type: 'number' },
        q_produtos_burger: { type: 'number' }
    },
}

const vendasOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Vendas,
            },
        },
    },
    handler: (req, reply) => {
        return reply.send(JSON.stringify([
            {loja: 'Arpoador',vendas: 94, meta_valor: 233, meta_prod_clt: 435.4, q_produtos:501, q_produtos_burger: 231},
            {loja: 'Leblon',vendas: 27, meta_valor: 312, meta_prod_clt: 3.50, q_produtos:235, q_produtos_burger: 12121},
            {loja: 'Barra',vendas: 49, meta_valor: 20.3, meta_prod_clt: 1.3, q_produtos:455, q_produtos_burger: 190},
        ]))
    },
}

function frontRoutes(fastify, options, done) {
    fastify.get('/api/getVendas/:date', vendasOpts)

    done()
}

module.exports = frontRoutes
