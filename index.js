const customExpress = require('./src/config/customExpress')
const conexao = require('./src/infra/conexao')
const Tabelas = require('./src/infra/tabelas')

conexao.connect((err) => {
  if(err) {
    console.log(err)
  }else{
    console.log('Conectado !')
    Tabelas.init(conexao)

    const app = customExpress()
    const PORT = 3000
    const HOST = '0.0.0.0'
    
    app.listen(PORT, HOST, () => console.log('Servidor ON !'))
  }
})