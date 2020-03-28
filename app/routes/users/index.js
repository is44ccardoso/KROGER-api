const to = require('../../utils/to')
const Joi = require('joi')
const User = require('../../models/Users')
const Boom = require('boom')

const userRoutes = server => {
  server.route({
    method: 'POST',
    path: '/user/create',
    options: {
      validate: {
        payload: Joi.object({
          email: Joi.string().required(),
          password: Joi.string().required(),
          name: Joi.string().required(),
          type: Joi.number().required()
        })
      }
    },
    handler: async (request, h) => {
      const { email, password, name, type } = request.payload

      const userType = whatUserType(type)

      const user = new User({ email, password, name, type: userType })

      const [err] = await to(user.save())

      if (err) {
        Boom.conflict(err.message)
      }

      return 'User created'
    }
  })

  server.route({
    method: 'GET',
    path: '/user',
    handler: async (request, h) => {
      const [err, users] = await to(User.find())

      if (err) {
        Boom.conflict(err.message)
      }

      return users
    }
  })
}

const whatUserType = type => {
  switch (type) {
    case 1:
      return 'admin'

    case 2:
      return 'teacher'

    case 3:
      return 'cordinator'

    case 4:
      return 'student'
  }
}

module.exports = userRoutes
