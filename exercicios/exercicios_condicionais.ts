import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao } from "../main";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main";

const prompt = promptSync();
let input:string

function notaValidacao(mensagem:string):number {
    let nota:number
	nota = parseFloat(prompt(mensagem))

	if (isNaN(nota) || nota < 0 || nota > 10){
		console.log(mensagemCor(vermelho, 
			"A nota informada não foi apresentada corretamente. Por favor, tente outra vez."));
		return (-1)
	}
	return (nota)
}

function mediaCalculator(notas:any):void {
	let media:number
	media = (notas.notaUm + notas.notaDois + notas.notaTres + notas.notaQuatro) / 4

	if (media >= 7)
		console.log(ciano + `Média: ${media}. Aluno aprovado.`)
	else if (media < 7 && media >= 5)
		console.log(ciano + `Média: ${media}.` + amarelo + ` Aluno em recuperação.`)
	else
		console.log(vermelho + `Média: ${media}. Aluno reprovado.`)
}

export function salarioAcrescimoDez(nome:string, cargo:string, salarioBase:number):number {
	/*
	Exercício 1:
	Faça um programa que receba o nome, cargo e salário de um
	funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
	salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
	desse funcionário.
	*/
	let salarioAcrescido:number

	if (salarioBase < 1000) {
		salarioAcrescido = salarioBase + (salarioBase / 10)
		console.log(ciano + `Nome: ` + roxo + `${nome}` + ciano + `.\nCargo: ` + roxo + ` ${cargo}.`)
		console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}.\n` +
		ciano + `Salario acrescido: ` + roxo + ` ${salarioAcrescido.toFixed(2)}.`)
	}
	else{
		console.log(ciano + `Nome: ` + roxo + `${nome}.\n` + ciano +`Cargo: ` + roxo + `${cargo}.`)
		console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}\n` + 
		ciano + `Seu salario não receberá o acrescimo.`);
	}
    return (0)
}

export function salarioAcrescidoTrinta(salario:number):number {
	/*
	Exercício 2
	Uma empresa decide dar aumento de 30% aos funcionários cujo
	salário é inferior a 500 reais. Escreva um programa que receba o
	salário de um funcionário e imprima o valor do salário reajustado ou
	uma mensagem caso o funcionário não tenha direito a aumento.
	*/

	if (salario < 500) {
		salario += salario / 30
		console.log(ciano + "Seu salario foi reajustado para: " + roxo + salario.toFixed(2) + ".")
	}
	else
		console.log(ciano + "Você não tem direito ao reajuste.")
    return (0)
}

export function positivoOuNegativo(numero:number):number {
	/*
	Exercício 3
	Faça um programa que receba um número inteiro do usuário e informe
	se este número é positivo ou negativo.
	*/
	if (numero < 0)
		console.log(ciano + "Seu numero é negativo.")
	else if (numero > 0)
		console.log(ciano + "Seu numero é positivo")
	else
		console.log(ciano + "Zero é zero, parça (numero neutro).");
	return (-1)
}

export function imparOuPar(numero:number):number {
	/*
	Exercício 4
	Faça um programa que receba um número do usuário e informe
	se este número é par ou ímpar.
	*/
	let restante:number

	restante = numero % 2

	if (restante != 0)
		console.log(ciano + "Seu numero é impar.")
	else
		console.log(ciano + "Seu numero é par")
    return (0)
}

export function maiorValor(numeroUm:number, numeroDois:number):number {
	/*
	Exercício 5
	Faça um programa receba dois valores e imprima qual é o maior
	número digitado.
	*/
	if (numeroUm > numeroDois)
		console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroUm}.`)
	else if
		(numeroDois > numeroUm)
		console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroDois}.`)
	else
		console.log(ciano + "Seus numeros são iguais")
    return (0)
}



export function media():number {
	/*
	Exercício 6
	Faça um programa que receba 4 notas de um aluno, calcule e
	imprima a média aritmética das notas e a mensagem de APROVADO
	para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
	5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
	*/
	const notas: {notaUm: number, notaDois: number, notaTres: number, notaQuatro: number} = {
        notaUm: 0,
        notaDois: 0,
        notaTres: 0,
        notaQuatro: 0
    };

	console.log(verde + "\nCalculadora de médias \nApresente os valores entre 0 e 10 ");

	notas.notaUm = notaValidacao((amarelo + "Digite a primeira nota: " + roxo))
	if (notas.notaUm == -1)
		return(-1)
	notas.notaDois = notaValidacao((amarelo + "Digite a segunda nota: " + roxo))
	if (notas.notaDois == -1)
		return(-1)
	notas.notaTres = notaValidacao((amarelo + "Digite a terceira nota: " + roxo))
	if (notas.notaTres == -1)
		return(-1)
	notas.notaQuatro = notaValidacao((amarelo + "Digite a quarta nota: " + roxo))
	if (notas.notaQuatro == -1)
		return(-1)

	mediaCalculator(notas)
    return (0)
}
