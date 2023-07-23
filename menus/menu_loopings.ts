import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "../main";

// FUNÇÕES
import { umADez, umADezPares, zeroACinquentaImpar,
	tabuada, fibonacci, zeroAVinte, somaUmACem,
	idadeValidacao, contagemRegressiva, zeroLoop,
	} from "../exercicios/exercicios_loopings";

const prompt = promptSync();

function opcoes():void {
	console.log(verde
				+ "\n1 = Numeros de 1 a 10"
				+ "\n2 = Numeros pares de 1 a 10"
				+ "\n3 = Numeros ímpares de 0 a 50"
				+ "\n4 = Tabuada"
				+ "\n5 = Sequência de Febonacci"
				+ "\n6 = Numeros pares de 0 a 20"
				+ "\n7 = Soma dos numeros de 1 a 100"
				+ "\n8 = Validação de idade"
				+ "\n9 = Contagem regressiva"
				+ "\n10 = Loop infinito de zeros\n");
}

function asciiArtLoopings():void {
	console.log(azul
	+ "\n██╗      ██████╗  ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗ ███████╗"
	+ "\n██║     ██╔═══██╗██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝ ██╔════╝"
	+ "\n██║     ██║   ██║██║   ██║██████╔╝██║██╔██╗ ██║██║  ███╗███████╗"
	+ roxo
	+ "\n██║     ██║   ██║██║   ██║██╔═══╝ ██║██║╚██╗██║██║   ██║╚════██║"
	+ "\n███████╗╚██████╔╝╚██████╔╝██║     ██║██║ ╚████║╚██████╔╝███████║"
	+ "\n╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝")
}

export function loopings():void {
	let exercicio:number
    let input:string

	asciiArtLoopings()
	opcoes();

	do {
		comandos()
		input = prompt(mensagemCor(amarelo,
			"Informe o numero do exercicio (1 a 10): ") + roxo)
        exercicio = parseInt(input)
		if (input == "op")
			opcoes()
		else if (!isNaN(exercicio) && exercicio != 0)
		{
			switch (exercicio) {
				case 1:
					umADez();
					break;
				case 2:
					umADezPares()
					break;
				case 3:
					zeroACinquentaImpar()
					break;
				case 4:
					tabuada()
					break;
				case 4:
					tabuada()
				case 5:
					fibonacci()
					break;
				case 6:
					zeroAVinte()
					break;
				case 7:
					somaUmACem()
					break;
				case 8:
					idadeValidacao()
					break;
				case 9:
					contagemRegressiva()
					break;
				case 10:
					zeroLoop()
					break;
				default:
					if (exercicio != 0)
					console.log(mensagemCor(vermelho, "Exercicio não encontrado. Tente um numero de 1 a 10."))
					break;
				}
			console.log(mensagemCor(verde, "Fim.\n"));
		}
	} while (exercicio != 0);
}
		