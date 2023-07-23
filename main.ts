import promptSync from "prompt-sync"

import { condicionaisUm } from "./menus/menu_condicionais";
import { exit } from "process";

const prompt = promptSync();

export const vermelho:string = '\u001b[' + 31 + ';1m'
export const verde:string = '\u001b[' + 32 + ';1m'
export const amarelo:string = '\u001b[' + 33 + ';1m'
export const azul:string = '\u001b[' + 34 + ';1m'
export const roxo:string = '\u001b[' + 35 + ';1m'
export const ciano:string = '\u001b[' + 36 + ';1m'
export const reset:string = '\x1b[0m'

let opcao:number

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
	+ "\n$$\\      $$\\     "
	+ "\n$$$\\    $$$ |   "
	+ "\n$$$$\\  $$$$ | $$$$$$\\  $$$$$$$\\  $$\\   $$\\ "
	+ "\n$$\\$$\\$$ $$ |$$  __$$\\ $$  __$$\\ $$ |  $$ |"
	+ "\n$$\\$$\\$$ $$ |$$  __$$\\ $$  __$$\\ $$ |  $$ |"
	+ roxo
	+ "\n$$ \\$$$  $$ |$$$$$$$$ |$$ |  $$ |$$ |  $$ |"
	+ "\n$$ |\\$  /$$ |$$   ____|$$ |  $$ |$$ |  $$ |"
	+ "\n$$ | \\_/ $$ |\\$$$$$$$\\ $$ |  $$ |\\$$$$$$  |"
	+ "\n\\__|     \\__| \\_______|\\__|  \\__| \\______/ \n")
}

function opcoesAtividades():void {
	console.log(mensagemCor(verde,
		"1 = Exercicios de Condicionais 1\
		\n2 = Exercicios de condicionais 2\
		\n3 = Exercicios de Loopings\n"));
}

do {
	asciiArtMenu()
	opcoesAtividades();
	console.log(mensagemCor(ciano, "Para sair, digite:" + roxo + " 0" + reset))
	opcao = parseInt(prompt(mensagemCor(amarelo, 
		"Escolha um conjunto de exercícios: ") + roxo))
	opcao = numeroValidacao(opcao)
	// if (opcao == 666){

	// 	s̸͇̫͈̳̓̎́̒̏̈́͒͗͘͠t̴̡̢̞̪̫̫̤̦̳̻͚̦̭̾̄͒͂̃͂͛̈̉̒̒͜ǎ̷̧̛̛̺̮̞̪̲͈̝̓͂̈̏́͊͐́̂̀͠͠ͅn̷͎̙̈̌̊͗̂̀̆̀̄̕()
		
	// }
	if (opcao > 3 || opcao < 0)
		console.log(mensagemCor(vermelho, "Conjunto não encontrado.\nInforme um numero de 1 a 3."));
	else if (opcao.toString() == "op")
		opcoesAtividades()
	else if (!isNaN(opcao))
	{
		switch (opcao) {
			case 1:
				condicionaisUm()
				break;
			case 2:
				// conditionalsDois()
				break;
			case 3:
				// loopings()
				break;
			default:
				break;
			}
		console.log(verde + "Fim." + reset);
	}
} while (opcao);