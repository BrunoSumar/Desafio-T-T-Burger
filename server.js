const fastify = require('fastify')()
// const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, './front/dist'),
})

fastify.register(require('./routes/front'))
fastify.register(require('./routes/api'))

const PORT = process.env.PORT || 8080

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
    console.log(`App is running on port ${ PORT }`);
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
