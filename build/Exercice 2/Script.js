"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_2_1 = require("./Exercice 2");
var prompt = PromptSync();
var nome = prompt('Digite seu nome: ');
var idDeAcesso = Number(prompt('Digite seu id de acesso: '));
var senha = prompt('Digite sua senha: ');
var cpf = prompt('Digite seu CPF: ');
var banco = prompt('Qual seu banco?: ');
do {
    senha = prompt('Repita a senha: ');
} while (senha != '1234');
console.log('\n\nNome:' + nome);
console.log('Seu id de acesso: ' + idDeAcesso);
console.log('Seu CPF: ' + cpf);
console.log("Seu banco \u00E9 o ".concat(banco));
var patinete = new Exercice_2_1.Bancaria({
    nome: nome,
    idDeAcesso: idDeAcesso,
    cpf: cpf,
    senha: senha,
    banco: banco
});
