import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao } from "../main";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main";

const prompt = promptSync();

export function login(user:any):void {
	/*
	Exercício 1: Verificação de login
	Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
	nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;.
	Exiba uma mensagem indicando se o login
	foi bem-sucedido ou não.
	*/

	if (user.usuario == "admin" && user.senha == "senha123")
		console.log(mensagemCor(verde, "Login feito com sucesso. Bem vindo, Ademir."));
	else
		console.log(mensagemCor(vermelho, "Você não é o Ademir. Login incorreto."));
}

export function diaDaSemana(dia:number):void {
	/*
	Exercício 2: Verificação de dia da semana
	Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
	semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
	2 representa terça-feira e assim por diante.
	*/

	switch (dia) {
		case 1:
			console.log(mensagemCor(azul, "Segunda-feira."));
			
			break;
		case 2:
			console.log(mensagemCor(azul, "Terça-feira."));
			
			break;
		case 3:
			console.log(mensagemCor(azul, "Quarta-feira."));
			
			break;
		case 4:
			console.log(mensagemCor(azul, "Quinta-feira."));
			
			break;
		case 5:
			console.log(mensagemCor(azul, "Sexta-feira."));
			
			break;
		case 6:
			console.log(mensagemCor(azul, "Sabado."));
			
			break;
		case 7:
			console.log(mensagemCor(azul, "Domingo."));
			
			break;
		default:
			if (isNaN(dia))
				break
			console.log("O numero informado não corresponde á um dia da semana.");
			break;
	}

}

export function numerosCrescentes(numeroUm:number, numeroDois:number, 
    numeroTres:number):void {
	/*
	Exercício 3: Verificação de números em ordem crescente
	Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
	crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
	*/
	
	if (numeroUm > numeroDois || numeroDois > numeroTres)
		console.log(mensagemCor(vermelho, "Seus números não estão em ordem crescente."))
	else if (numeroUm < numeroDois || numeroDois < numeroTres)
		console.log(mensagemCor(verde, "Seus números estão em ordem crescente."));
	else
		console.log(mensagemCor(verde, "Seus numeros são iguais."));
}

export function idadeVerificacao(anoNascimento:number, anoAtual:number):void {
	/*
	Exercício 4: Verificação de idade
	Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
	de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
	*/

	let idade:number

	idade = anoAtual - anoNascimento

	if (idade >= 18)
		console.log(mensagemCor(azul, `Idade: ${roxo + idade + azul}. Parabens! Você é maior de idade e pode ser preso!`));
	else
		console.log(mensagemCor(azul, 
		`Idade: ${roxo + idade + azul}. Parabéns! Você ainda não é um maior de idade. Aproveite, pois vai acabar.`));
}

export function descontoProgressivo(valor:number):void {
	/*
	Exercício 5: Cálculo de desconto progressivo

	Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
	pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
	aplique um desconto de acordo com o valor total da compra. Siga a tabela:

	Valor total da compra até R$ 100,00: sem desconto.
	Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
	Valor total da compra acima de R$ 200,00: desconto de 20%.

	Exiba o valor final da compra com o desconto aplicado.
	*/
	console.log(ciano + `Valor da compra: ` + roxo + `R$${valor}`);

	if (valor > 100 || valor <= 200)
		valor -= valor / 10
	else if (valor > 200)
		valor -= valor / 20

	console.log(ciano + `Valor da compra com desconto: ` + roxo + `R$${valor.toFixed(2)}`);

}

export function imc(peso:number, altura:number):void {
	/*
	Exercício 6: Cálculo de IMC
	Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
	Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
	* altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
	usuário se encontra, de acordo com a tabela a seguir:
	IMC menor que 18.5: Abaixo do peso
	IMC de 18.5 a 24.9: Peso normal
	
	IMC de 25.0 a 29.9: Sobrepeso
	IMC de 30.0 a 34.9: Obesidade grau 1
	IMC de 35.0 a 39.9: Obesidade grau 2
	IMC maior ou igual a 40.0: Obesidade grau 3
	*/

	let imc

	imc = peso / (altura * altura)
	
	if (imc < 18.5)
		console.log(mensagemCor(roxo, "Abaixo do peso."));
	else if (imc < 24.9)
		console.log(mensagemCor(verde, "Peso normal."));
	else if (imc < 29.9)
		console.log(mensagemCor(roxo, "Sobrepeso"));
	else if (imc < 34.9)
		console.log(mensagemCor(vermelho, "Obesidade grau 1"));
	else if (imc < 39.9)
		console.log(mensagemCor(vermelho, "Obesidade grau 2"));
	else
		console.log(mensagemCor(vermelho, "Obesidade grau 3"));
}