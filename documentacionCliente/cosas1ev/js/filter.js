numeros = [2, 5, 8, 5, 10, 4, 11]

palabras = ["pie", "avioneta","En", "ll", "ha", "laguna", "rr", "a","elefante"]

var greaterThanTwo = x => x.length>2;

var startVowel = word => /^[a,e,i,o,u]/i.test(word);
//i para ignorar mayusculas y minusculas 
// ^significa que empieza por vocal

var containVowel = word => /[a,e,i,o,u]/i.test(word);

var isOdd =x => x % 2 !== 0;//devuelve los impares

function filter(p, xs){
  var ys = [];
  for (var x of xs) {
      if(p(x)){
          ys.push(x);
      }
  }
  return ys;
}

module.exports = { filter, isOdd, greaterThanTwo, startVowel }


///////////////Funciones enteras/////////////////

function impares(xs) {
  var ys = []
  for (var i = 0; i < xs.length; i++) {
    if (xs[i] % 2 == 0) {
      ys.push(xs[i])
    }
  }
  return ys;
}
//console.log(impares(numeros))


function tresLetras(xs) {
  var ys = []
  for (var i = 0; i < xs.length; i++) {
    if (xs[i].length > 2) {
      ys.push(xs[i])
    }
  }
  return ys;
}
//console.log(tresLetras(palabras))


function empiezaVocal(xs) {
  var ys = []
  for (var i = 0; i < xs.length; i++) {
    if (xs[i].toLowerCase().startsWith('a')||xs[i].toLowerCase().startsWith('e')
      ||xs[i].toLowerCase().startsWith('i')||xs[i].toLowerCase().startsWith('o')
      ||xs[i].toLowerCase().startsWith('u')) {
      ys.push(xs[i])
    }
  }
  return ys;
}
//console.log(empiezaVocal(palabras))


function contieneVocal(xs) {
  var ys = []
  for (var i = 0; i < xs.length; i++) {
    if (xs[i].toLowerCase().includes('a')||xs[i].toLowerCase().includes('e')
      ||xs[i].toLowerCase().includes('i')||xs[i].toLowerCase().includes('o')
      ||xs[i].toLowerCase().includes('u')) {
      ys.push(xs[i])
    }
  }
  return ys;
}
//console.log(contieneVocal(palabras))




/**
 * implemente reduce recursivo
 * 
 * implementar map con reduce//hecho por javier
 * 
 * implemente filter con reduce
 * 
 * 
 */