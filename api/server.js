const fastify = require('fastify')()
// const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../front/dist'),
  // prefix: '/public/', // optional: default '/'
})

// fastify.get('/another/path', function (req, reply) {
//   return reply.sendFile('myHtml.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
// })

// fastify.get('/path/with/different/root', function (req, reply) {
//   return reply.sendFile('myHtml.html', path.join(__dirname, 'build')) // serving a file from a different root location
// })

fastify.get('/', function (req, reply) {
  return reply.sendFile('index.html') // serving a file from a different root location
  // return reply.send([1,2,3,4])
})

fastify.get('/api/getMetasInfo', function (req, reply) {
  return reply.send(JSON.stringify([
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
        {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
    ]))
})
// app.get('/', (req,res) => // {
//   res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
// });

const PORT = 5000

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
