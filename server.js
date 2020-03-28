const Hapi = require('@hapi/hapi')
const connectDB = require('./app/config/db')
const userRoutes = require('./app/routes/users')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost'
  })

  await server.start()
  await connectDB()

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'API is running beautifully!'
    }
  })

  userRoutes(server)

  console.log('Server running on port 5000')
}

init()
