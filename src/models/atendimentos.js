const moment = require('moment')
const conexao = require('../infra/conexao')

class Atendimento {
  adicona(atendimento, res) {
    const data_criacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    const dataValidacao = moment(data).isSameOrAfter(data_criacao)
    const nomeValidacao = atendimento.cliente.length >= 5

    const validacoes = [
      {
        nome: 'data',
        valido: dataValidacao,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: nomeValidacao,
        mensagem: 'Cliente deve teve ter no minimo 5 caracteres'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)

    if(erros.length){
      res.status(400).json(erros)
    }else{
      const atendimentoDatado = {...atendimento, data_criacao, data}
  
      const sql = 'INSERT INTO Atendimentos SET ?'
  
      conexao.query(sql, atendimentoDatado, (err, resultados) => {
        if(err) {
          res.status(400).json(err)
        }else{
          res.status(201).json(atendimento)
        }
      })
    }
  }

  lista(res) {
    const sql = `SELECT * FROM Atendimentos`

    conexao.query(sql, (err, resultados) => {
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

    conexao.query(sql, (err, resultados) => {
      const atendimento = resultados[0]
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(atendimento)
      }
    })
  }

  altera(id, valores, res) {
    if(valores.data){
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }
    const sql = `UPDATE Atendimentos SET ? WHERE id=?`

    conexao.query(sql, [valores, id], (err, resultados) => {
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, res) {
    const sql = `DELETE FROM Atendimentos WHERE id=?`

    conexao.query(sql, id, (err, resultados) => {
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(id)
      }
    })
  }
}

module.exports = new Atendimento