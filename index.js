const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/aprendendo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected'))
  .catch((erro) => console.log('Houver um erro: ' + erro))

const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
})

// no da tabela ou colletion no mongo que um orietando a documentos(dados)
const Usuario = mongoose.model('usuarios', UsuarioSchema)

new Usuario({
  nome: "wanderson",
  sobrenome: "matos", // Corrected "Sobrenome" to "sobrenome"
  email: "safadsaf@fasdfds.com",
  idade: 45
}).save()
  .then(() => {
    console.log("usuario criado com sucesso");
  })
  .catch((err) => {
    console.log("Houve erro ao criar o usuario" + err);

  });