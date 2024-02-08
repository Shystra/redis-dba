async function EmailRoutes(server){
    server.get('/', () => {
        return "Hello"
    })
}

module.exports = EmailRoutes;