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
            {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
            {loja: req.params.date,vendas: 7, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
            {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        ]))
        // return reply.sendFile('index.html')
    },
}

function frontRoutes(fastify, options, done) {
    fastify.get('/api/getVendas/:date', vendasOpts)

    done()
}

module.exports = frontRoutes
