"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Questão 9
const axios_1 = __importDefault(require("axios"));
// Parte 1
const umPorSegundo = async () => {
    let result = await new Promise(function (myResolve, myReject) {
        setTimeout(() => {
            console.log("1s");
            new Promise(function (myResolve, myReject) {
                setTimeout(() => {
                    console.log("2s");
                    new Promise(function (myResolve, myReject) {
                        setTimeout(() => {
                            console.log("3s");
                        }, 1000);
                    });
                }, 1000);
            });
        }, 1000);
    });
    return result;
};
console.log(umPorSegundo());
console.log("Eu não espero ela executar");
// Parte 2
async function getUserFromGitHub(user) {
    try {
        let result = await axios_1.default.get('https://api.github.com/users/' + user);
        result = await result.data;
        console.log(result);
    }
    catch (err) {
        console.error("O usuário '" + user + "' não existe!");
    }
}
getUserFromGitHub('diego3g');
getUserFromGitHub('diego3g124123');
// Parte 3
class GitHub {
}
GitHub.getRepositories = async (repo) => {
    try {
        let result = await axios_1.default.get('https://api.github.com/repos/' + repo);
        result = await result.data;
        console.log(result);
    }
    catch (err) {
        console.error("O Repositório '" + repo + "' não existe!");
    }
};
GitHub.getRepositories('rocketseat-education/bootcamp-gostack-desafios');
GitHub.getRepositories('rocketseat/rocketseat.com.br');
GitHub.getRepositories('rocketseat/dslkvmskv');
// Parte 4
const buscaUsuario = async (usuario) => {
    try {
        let result = await axios_1.default.get('https://api.github.com/users/' + usuario);
        result = await result.data;
        console.log(result);
    }
    catch (err) {
        console.error("O usuário '" + usuario + "' não existe!");
    }
};
buscaUsuario('diego3g');
