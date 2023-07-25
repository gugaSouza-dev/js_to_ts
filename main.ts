import promptSync from "prompt-sync"
import { exit } from "process";

import { condicionaisUm } from "./menus/menu_condicionais";
import { condicionaisDois } from "./menus/menu_condicionais_dois";
import { loopings } from "./menus/menu_loopings";

const prompt = promptSync();

export const vermelho:string = '\u001b[' + 31 + ';1m'
export const verde:string = '\u001b[' + 32 + ';1m'
export const amarelo:string = '\u001b[' + 33 + ';1m'
export const azul:string = '\u001b[' + 34 + ';1m'
export const roxo:string = '\u001b[' + 35 + ';1m'
export const ciano:string = '\u001b[' + 36 + ';1m'
export const reset:string = '\x1b[0m'

export function mensagemCor(cor:string, mensagem:string):string {
	return (cor + mensagem + reset);
}

export function numeroValidacao(numero:number):number {
	let str:string = numero.toString();
	//checa se o input do usuario é um ENTER. Se for, encerra o programa
	if (str == null || isNaN(str.charCodeAt(0)))
	{
		console.log(verde + "Goodbye!" + reset);
		exit(-1)
	}
	if (str == "op")
		return (numero)
	if (isNaN(numero)){
		console.log(mensagemCor(vermelho, 
			"O valor informado não é um numero. Por favor, tente novamente."));
		return (numero)
	}
	return (numero)
}

export function comandos():void {	
	console.log(mensagemCor(ciano, "Para sair, digite:" + roxo + " 0"
	+ ciano +"\nPara mostrar as opções, digite: " + roxo + "op"));
}

function asciiArtMenu():void {
	console.log(azul
	+ "\n /$$$$$$$$                             /$$$$$$                      /$$             /$$    "
	+ "\n|__  $$__/                            /$$__  $$                    |__/            | $$    "
	+ "\n   | $$ /$$   /$$  /$$$$$$   /$$$$$$ | $$  \__/  /$$$$$$$  /$$$$$$  /$$  /$$$$$$  /$$$$$$  "
	+ "\n   | $$| $$  | $$ /$$__  $$ /$$__  $$|  $$$$$$  /$$_____/ /$$__  $$| $$ /$$__  $$|_  $$_/  "
	+ "\n   | $$| $$  | $$| $$  \\ $$| $$$$$$$$ \\____  $$| $$      | $$  \\__/| $$| $$  \\ $$  | $$    "
	+ "\n   | $$| $$  | $$| $$  | $$| $$_____/ /$$  \\ $$| $$      | $$      | $$| $$  | $$  | $$ /$$"
	+ "\n   | $$|  $$$$$$$| $$$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$| $$      | $$| $$$$$$$/  |  $$$$/"
	+ roxo
	+ "\n   |__/ \\____  $$| $$____/  \\_______/ \\______/  \\_______/|__/      |__/| $$____/    \\___/  "
	+ "\n        /$$  | $$| $$                                                  | $$                "
	+ "\n       |  $$$$$$/| $$                                                  | $$                "
	+ "\n        \\______/ |__/                                                  |__/                \n")
}

function opcoesAtividades():void {
	console.log(mensagemCor(verde,
		"1 = Exercicios de Condicionais 1\
		\n2 = Exercicios de condicionais 2\
		\n3 = Exercicios de Loopings\n"));
}

let opcao:number

asciiArtMenu()
do {

	opcoesAtividades();
	console.log(mensagemCor(ciano, "Para sair, digite:" + roxo + " 0" + reset))
	opcao = parseInt(prompt(mensagemCor(amarelo, 
		"Escolha um conjunto de exercícios: ") + roxo))
	opcao = numeroValidacao(opcao)
	if (opcao.toString() == "op")
		opcoesAtividades()
	else if (opcao == 0)
		break;
	else if (!isNaN(opcao))
	{
		switch (opcao) {
			case 1:
				condicionaisUm()
				break;
			case 2:
				condicionaisDois()
				break;
			case 3:
				loopings()
				break;
			default:
				console.log(mensagemCor(vermelho, "Conjunto não encontrado.\nInforme um numero de 1 a 3."));
				break;
			}
	}
} while (opcao);