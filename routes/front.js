const frontOpts = {
    handler: (req, reply) => {
        return reply.sendFile('index.html')
        // return reply.sendFile('../README.md')
    },
}

function frontRoutes(fastify, options, done) {
    fastify.get('/', frontOpts)

    done()
}

module.exports = frontRoutes
