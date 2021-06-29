const frontOpts = {
    handler: (req, reply) => {
        // return reply.sendFile('index.html')
        return reply.send({a: 234234})
    },
}

function frontRoutes(fastify, options, done) {
    fastify.get('/', frontOpts)

    done()
}

module.exports = frontRoutes
