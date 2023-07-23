import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main";
import { imparOuPar, maiorValor, positivoOuNegativo,
	 salarioAcrescidoTrinta, salarioAcrescimoDez, media } from "../exercicios/exercicios_condicionais";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main";

const prompt = promptSync();

function opcoes():void {
	console.log(verde
		+ "\n1 = Calcula acréscimo de 10% em valores menores que 1000"
		+ "\n2 = Checa se um valor receberá um acréscimo ou não"
		+ "\n3 = Checa se o seu numero é negativo, positivo ou neutro"
		+ "\n4 = Checa se um numero é par ou impar"
		+ "\n5 = Avalia qual é o maior entre dois numeros"
		+ "\n6 = Calculadora de médias\n");
}

function asciiArtConditionals():void {	
	console.log(azul
		+ "\n ██████╗ ██████╗ ███╗   ██╗██████╗ ██╗████████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██╗     ███████╗"
		+ "\n██╔════╝██╔═══██╗████╗  ██║██╔══██╗██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔══██╗██║     ██╔════╝"
		+ "\n██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║   ██║██║   ██║██╔██╗ ██║███████║██║     ███████╗"
		+ roxo
		+ "\n██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║   ██║██║   ██║██║╚██╗██║██╔══██║██║     ╚════██║"
		+ "\n╚██████╗╚██████╔╝██║ ╚████║██████╔╝██║   ██║   ██║╚██████╔╝██║ ╚████║██║  ██║███████╗███████║"
		+ "\n ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝")
	
}

export function condicionaisUm():void {
	let exercicio:number
	let input:string

	asciiArtConditionals()
	opcoes();
	do {
		comandos()
		input = prompt(mensagemCor(roxo, mensagemCor(amarelo,
			"Informe o numero do exercicio (1 a 6): ")) + roxo)		
		exercicio = parseFloat(input)		
		if (input == "op")
			opcoes()
		else if (!isNaN(exercicio) && exercicio != 0)
		{
			switch (exercicio) {
				case 1:
					salarioAcrescimoDez()
					break;
				case 2:
					salarioAcrescidoTrinta()
					break;
			
				case 3:
					positivoOuNegativo()
					break;
				case 4:
					imparOuPar()
					break;
			
				case 5:
					maiorValor()
					break;
			
				case 6:
					media()
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
