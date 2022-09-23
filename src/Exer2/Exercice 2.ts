interface newBancaria {
  
    nome : string;
    idDeAcesso : number
    senha : string
    cpf : string;
  }

class Bancaria {
    private nome : string
    private idDeAcesso : number
    private senha : string
    private cpf : string

    constructor ({nome, idDeAcesso,senha, cpf,} : newBancaria) {
        this.nome = nome
        this.idDeAcesso = idDeAcesso
        this.senha = senha
        this.cpf = cpf
      
    }
}
export {Bancaria}