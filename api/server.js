const fastify = require('fastify')()
// const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../front/dist'),
})

fastify.register(require('./routes/front'))
fastify.register(require('./routes/api'))



// fastify.get('/api/getMetasInfo', function (req, reply) {
//   return reply.send(JSON.stringify([
//         {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
//         {loja: 'local',vendas: 7, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
//         {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
//     ]))
// })
// app.get('/', (req,res) => // {
//   res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
// });

const PORT = process.env.PORT || 8080

const start = async () => {
  try {
    await fastify.listen(PORT)
    console.log(`App is running on port ${ PORT }`);
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
