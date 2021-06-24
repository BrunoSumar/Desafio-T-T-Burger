const app = require('fastify')({logger: true})

const PORT = 5000

// const app.register(require('api'))
app.register(require('./api'))

const start = async () => {
  try {
    await app.listen(PORT)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
