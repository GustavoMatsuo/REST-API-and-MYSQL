const Atendimento = require('../models/atendimentos')

module.exports = app => {
  app.route('/atendimentos')
    .get((req, res) => {
      Atendimento.lista(res)
    })
    .post((req, res) => {
      const atendimento = req.body
      Atendimento.adicona(atendimento, res)
    })

  app.route('/atendimentos/:id')
    .get((req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.buscaPorId(id, res)
    })
    .patch((req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimento.altera(id, valores, res)
    })
    .delete((req, res) => {
      const id = parseInt(req.params.id)
      Atendimento.deleta(id, res) 
    })
}