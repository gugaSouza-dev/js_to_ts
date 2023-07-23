import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main";
import { descontoProgressivo, diaDaSemana, imc,
	login, numerosCrescentes, idadeVerificacao } from "../exercicios/exercicios_condicionais_dois";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "../main";

const prompt = promptSync();

function opcoes():void {
	console.log(verde
				+ "\n1 = Login do Ademir"
				+ "\n2 = Dias da Semana"
				+ "\n3 = Checa ordenação de três numeros"
				+ "\n4 = Verificação de idade"
				+ "\n5 = Calculador de descontos"
				+ "\n6 = Calculadora de IMC\n");
}

function asciiArt():void {
	console.log(azul
	+ "\n ██████╗ ██████╗ ███╗   ██╗██████╗ ██╗████████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██╗     ███████╗    ██████╗ "
	+ "\n██╔════╝██╔═══██╗████╗  ██║██╔══██╗██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔══██╗██║     ██╔════╝    ╚════██╗"
	+ "\n██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║   ██║██║   ██║██╔██╗ ██║███████║██║     ███████╗     █████╔╝"
	+ roxo
	+ "\n██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║   ██║██║   ██║██║╚██╗██║██╔══██║██║     ╚════██║    ██╔═══╝ "
	+ "\n╚██████╗╚██████╔╝██║ ╚████║██████╔╝██║   ██║   ██║╚██████╔╝██║ ╚████║██║  ██║███████╗███████║    ███████╗"
	+ "\n ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝")
}


export function condicionaisDois():void {
    let input:string
	let exercicio:number

	asciiArt()
	opcoes()
	do {
		comandos()
		input = prompt(
			mensagemCor(amarelo, "Informe o numero do exercicio (1 a 6): ") + roxo)
        exercicio = parseFloat(input)
        if (input == "op")
			opcoes()
		else if (!isNaN(exercicio) && exercicio != 0) 
		{
			switch (exercicio) {
				case 1:
					const user: {usuario: string, senha: string} = {
                        usuario: "",
                        senha: ""
                    }

					console.log(verde, "\nLogin do Ademir.\n");
					user.usuario = prompt(mensagemCor(amarelo, "Informe seu usuário: ") + roxo)
					user.senha = prompt(mensagemCor(amarelo, "Informe sua senha: ") + roxo)
					login(user)
					break;
				case 2:
					console.log(mensagemCor(verde, "\nDias da Semana.\n"));
					diaDaSemana(numeroValidacao(parseInt(prompt(
                        mensagemCor(amarelo, "Informe um numero de 1 a 7: ") + roxo))))
					break;
				case 3:
					let numeroUm:number
					let numeroDois:number
					let numeroTres:number
				
					console.log(verde + "\nCheca ordenação de três numeros.\n");
				
					numeroUm = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Insira o primeiro número: ") + roxo)))
					if (isNaN(numeroUm))
						break;
					numeroDois = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Insira o segundo número: ") + roxo)))
					if (isNaN(numeroDois))
						break;
					numeroTres = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Insira o terceiro número: ") + roxo)))
					if (isNaN(numeroTres))
						break;

					numerosCrescentes(numeroUm, numeroDois, numeroTres)
					break;
				case 4:
					let anoNascimento:number
					let anoAtual:number
				
					console.log(verde + "\nVerificação de idade.\n");

					anoNascimento = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Informe o seu ano de nascimento: ") + roxo)))
					if (isNaN(anoNascimento))
						break;
					anoAtual = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Informe o ano que estamos: ") + roxo)))
					if (isNaN(anoAtual))
						break;
					idadeVerificacao(anoNascimento, anoAtual)				
					break;
				case 5:
					let valor:number

					console.log(verde + "\nCalculador de descontos.\n");			

					valor = numeroValidacao(parseFloat(prompt(mensagemCor(
                        amarelo, "Informe o valor total da compra: ") + roxo)))
					if (isNaN(valor))
						break;
					descontoProgressivo(valor)
					break;
				case 6:
					let peso:number
					let altura:number

					console.log(verde + "\nCalculadora de IMC");

					peso = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Informe o peso em KG: ") + roxo)))
					if (isNaN(peso))
						break;
					altura = numeroValidacao(parseFloat(prompt(
                        mensagemCor(amarelo, "Informe a altura em metros: ") + roxo)))
					if (isNaN(altura))
						break;
					imc(peso, altura)			
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