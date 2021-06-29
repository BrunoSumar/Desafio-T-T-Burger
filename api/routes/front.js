const frontOpts = {
    handler: (req, reply) => {
        return reply.sendFile('index.html')
    },
}

function frontRoutes(fastify, options, done) {
    fastify.get('/', frontOpts)

    done()
}

module.exports = frontRoutes
