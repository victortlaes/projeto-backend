class Usuario {
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
  }

  static verificarCredenciais(usuario, senha) {
  
    if (usuario === process.env.USUARIO && senha === process.env.SENHA) {
      return true; 
    }
    return false; 
  }
}

module.exports = Usuario;