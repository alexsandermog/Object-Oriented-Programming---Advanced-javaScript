interface newPatinete {
  
    marca : string;
    cor : string;
    banco : number
  }

class Patinete {
    private marca : string
    private cor : string
    private banco : number

    constructor ({marca, cor, banco} : newPatinete) {
        this.marca = marca
        this.cor = cor
        this.banco = banco
    }
}

export {Patinete}