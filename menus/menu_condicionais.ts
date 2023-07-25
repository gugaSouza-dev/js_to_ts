import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main";
import { imparOuPar, maiorValor, positivoOuNegativo,
	 salarioAcrescidoTrinta, salarioAcrescimoDez, media } from "../exercicios/exercicios_condicionais";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main";

const prompt = promptSync();

function stringValidacao(str: string):string {
	if (!str) {
		console.log(mensagemCor(vermelho, "Valor vazio não aceito."));
		return ("")
	}
	return (str)
}

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
	let numero:number

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
					let nome:string
					let cargo:string
					let salarioBase:number
				
					console.log(verde + "\nCalcula acréscimo de 10% em valores menores que 1000\n");
				
					nome = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu nome: ") + roxo))
					if (nome == null)
						break;
					cargo = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu cargo: ") + roxo))
					if (cargo == null)
						break;
					salarioBase = numeroValidacao(parseFloat(prompt(
						mensagemCor(amarelo, "Digite seu salario: ") + roxo)))
					if (isNaN(salarioBase))
						break;

					salarioAcrescimoDez(nome, cargo, salarioBase)
					break;
				case 2:
					let salario:number

					console.log(verde + "\nCheca se um valor receberá um acréscimo ou não. ");
					input = prompt(mensagemCor(amarelo, "Digite seu salario: ") + roxo)
					salario = numeroValidacao(parseFloat(input))
					if (isNaN(salario))
						break;
					salarioAcrescidoTrinta(salario)
					break;
			
				case 3:
					console.log(verde + "\nCheca se o seu numero é negativo, positivo ou neutro. ");
					input = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
					numero = numeroValidacao(parseFloat(input))
					if (isNaN(numero))
						break;
					positivoOuNegativo(numero)
					break;

				case 4:		
					console.log(verde + "\nCheca se um numero é par ou impar. ");
					input = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
					numero = numeroValidacao(parseFloat(input))
					if (isNaN(numero))
						break;
					imparOuPar(numero)
					break;
			
				case 5:
					let numeroUm:number
					let numeroDois:number
				
					console.log(verde + "\nAvalia qual é o maior entre dois numeros ");
					input = prompt(mensagemCor(amarelo, "Digite o primeiro numero: ") + roxo)
					numeroUm = numeroValidacao(parseInt(input))
					if (isNaN(numeroUm))
						break;
					input = prompt(mensagemCor(amarelo, "Digite o segundo numero: ") + roxo)
					numeroDois = numeroValidacao(parseFloat(input))
					if (isNaN(numeroDois))
						break;
					maiorValor(numeroUm, numeroDois)
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
