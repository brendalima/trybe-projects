// Desafio 1
//Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

//Retorne true se ambos os valores são verdadeiros;
//Retorne false se um ou ambos os parâmetros forem falsos.

let bool1 = true;
let bool2 = false;
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  } else {
    return false;
  }
}
let function1 = compareTrue(bool1, bool2);
console.log(function1);

// Desafio 2
//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

let base = 3;
let height = 5;
function calcArea(base, height) {
  return (base*height)/2;  
}
let area = calcArea(base, height);
console.log(area);

// Desafio 3
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

let frase = 'vamo que vamo';
function splitSentence(frase) {
  return frase.split(' ');
}
let arrayDePalavras = splitSentence(frase);
console.log(arrayDePalavras);

// Desafio 4
//Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

function concatName(arrayDeStrings) {
  let stringFinal = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];
  return stringFinal
}
let stringUltimoPrimeiro = concatName(['Brenda', 'Richard', 'Kiara', 'Saphira']);
console.log(stringUltimoPrimeiro);

// Desafio 5
//Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

//Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

let resultadoCampeonato = footballPoints(3, 5);
console.log(resultadoCampeonato);

// Desafio 6
//Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros);
  let contador = 0;
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] == maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

let quantidadeMaiorNumero = highestCount([1, 3, 15, 4, 15, 8, 15, 6]);
console.log(quantidadeMaiorNumero);

// Desafio 7
//Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

//Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
  }
  let resultadoCaptura = catAndMouse(1, 4, 4);
  console.log(resultadoCaptura);

// Desafio 8
//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

//Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
//Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";

function fizzBuzz(numerosFB) {
  let arrayFizzBuzz = [];
  for (i = 0; i < numerosFB.length; i += 1) {
    if (numerosFB[i] % 3 == 0 && numerosFB[i] % 5 == 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (numerosFB[i] % 3 == 0) {
      arrayFizzBuzz.push("fizz");
    } else if (numerosFB[i] % 5 == 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}
let testeFizzBuzz = fizzBuzz([2, 15, 7, 9, 45]);
console.log(testeFizzBuzz);


// Desafio 9
//Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números

//A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

function encode(fraseEntrada) {
      fraseEntrada = fraseEntrada.replace(/a/g, 1);

      fraseEntrada = fraseEntrada.replace(/e/g, 2);

      fraseEntrada = fraseEntrada.replace(/i/g, 3);
  
      fraseEntrada = fraseEntrada.replace(/o/g, 4);
   
      fraseEntrada = fraseEntrada.replace(/u/g, 5);

      return fraseEntrada;
}

let testeEncode = encode("hi there!");
console.log(testeEncode);

function decode(fraseEntrada) {
  fraseEntrada = fraseEntrada.replace(/1/g, "a");

      fraseEntrada = fraseEntrada.replace(/2/g, "e");

      fraseEntrada = fraseEntrada.replace(/3/g, "i");
  
      fraseEntrada = fraseEntrada.replace(/4/g, "o");
   
      fraseEntrada = fraseEntrada.replace(/5/g, "u");

      return fraseEntrada;
}

let testeDecode = decode(testeEncode);
console.log(testeDecode);

// Desafio 10
//Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

//Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

//{
//  tech: "NomeTech",
//  name: name
//}
//Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

//A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

function techList(tecnologias, name) {

  let arrayTech = [];
  if (tecnologias.length == 0) {
    return "Vazio!";
  } else {
    for (i = 0; i < tecnologias.length; i += 1) {
      objeto = {
        tech: tecnologias[i],
        name: name
      }
      arrayTech.push(objeto);
    }
// função compare a seguir foi adapatada de https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    function compare(a, b) {
      let tech1 = a.tech;
      let tech2 = b.tech;
    
      let comparison = 0;
      if (tech1 > tech2) {
        comparison = 1;
      } else if (tech1 < tech2) {
        comparison = -1;
      }
      return comparison;
    }
    arrayTech.sort(compare);
    return arrayTech;
  }
}

let testeTechList = techList([], "Lucas");
console.log(testeTechList);

// Desafio 11
//Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

//Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

//Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

function generatePhoneNumber(numerosTelefone) {
  if (numerosTelefone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (i1 = 0; i1 < numerosTelefone.length; i1 += 1) {
      if (numerosTelefone[i1] < 0 || numerosTelefone[i1] > 9 || numerosTelefone.filter(x => x === numerosTelefone[i1]).length >= 3) { //última condição adaptada de https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  
      let conversao = numerosTelefone.toString();
      let part1 = "(";
      let part2 = ") ";
      let part3 = "-";
      for (i2 = 0; i2 < conversao.length - 18; i2 += 2) {
        part1 = part1.concat(conversao[i2]);
      }
      for (i3 = 4; i3 < conversao.length - 8; i3 += 2) {
        part2 = part2.concat(conversao[i3]);
      }
      for (i4 = 14; i4 < conversao.length; i4 += 2) {
        part3 = part3.concat(conversao[i4]);
      }
      return part1 + part2 + part3;
}

let testeGenerator = generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 2]);
console.log(testeGenerator);


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
