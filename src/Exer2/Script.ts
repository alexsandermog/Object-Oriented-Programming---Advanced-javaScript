import PromptSync = require('prompt-sync');
import { Bancaria } from './Exercice 2';

const prompt = PromptSync()

const nome = prompt('Digite seu nome: ')
const idDeAcesso = Number(prompt('Digite seu id de acesso: '))
let senha = prompt('Digite sua senha: ')
const cpf = prompt('Digite seu CPF: ')



do {
    senha = prompt('Repita a senha: ')
} while (senha != '1234') 


console.log('\n\nNome:' + nome)
console.log('Seu id de acesso: ' + idDeAcesso)
console.log('Seu CPF: ' + cpf)


const patinete = new Bancaria ({
    nome,
    idDeAcesso,
    cpf,
    senha,
   
})