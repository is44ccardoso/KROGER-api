const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('API IS RUNNING BEUTYFULY'))

app.get('/fullname', (req, res) => {
  const name = 'Isaac'
  const lastname = 'Cardoso'

  res.send(name + lastname)
})

app.listen(5000, () => console.log('App is running'))
