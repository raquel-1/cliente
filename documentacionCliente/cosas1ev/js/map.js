const {reduce} = require('./reduce');


var nombres = ["raquel", "juan", "pepe"]

arrayBool = [false, false, true, false]

var double = number=> number * 2;

var inc = number=> number + 1;

var negate = p=> !p;

function map(f, xs) {
  var ys = [];
  for (var x of xs) {
    ys.push(f(x));//f transforma el valor de x
  }
  return ys;
}

//////map recursivo/////////////7777

function mapRecu(f, xs) {
  if(xs.length == 0){
    return [];
  }else{
    var [head, ...tail]=xs;
    return [f(head), ...mapRecu(f,tail)];
  }
}

function mapRecu2(f,xs){
  function _mapRecu2(f, xs, result) {
    if(xs.length == 0){
      return result;
    }else{
      var [head, ...tail]=xs;
      return _mapRecu2(f, tail, [...result, f(head)]);
    }
  }
  return _mapRecu2(f, xs, []);
}


//console.log(mapRecu2(x=>x*2 ,  Array(1000).fill(1).map((x ,i) => i + 1)));

// Array(1000)   creo un array de 1000 elementos

// .fill(1)    se llena todo el array de 1


/////////////////////MAP CON REDUCE

function mapWithReduce(f, xs){
  return reduce(
    function(acc, x){
      return [...acc, f(x)];
    },
    [],
    xs
  );
}

//////////////////////////composion de funciones 

function doubleAfterInc(number){
  return double(inc(number))
}

function incAfterDoubleAfterInc(number){
  return inc(doubleAfterInc(number))
}



////////////FUNCIONES COMPLETAS ////////////////////////////////
function doubleFull(numeros) {
    var a = []
    for (var i = 0; i < numeros.length; i++) {
      a.push(numeros[i] * 2)
    }
    return a;
}
//console.log(doubleFull(numeros))


function incFull(numeros) {
  var a = []
  for (var i = 0; i < numeros.length; i++) {
    a.push(numeros[i] + 1)
  }
  return a;
}
//console.log(incFull(numeros))


function initializeFull(nombres) {
  var wordsCopy = []
  for (var i = 0; i < nombres.length; i++) {
    wordsCopy.push(nombres[i].charAt(0).toUpperCase() + nombres[i].slice(1))
  }
  return wordsCopy;
}
//console.log(initializeFull(nombres))

function negateFull(valores) {
  var a = []
  for (var i = 0; i < valores.length; i++) {
    a.push(!valores[i])
  }
  return a;
}
//console.log(negateFull(arrayBool))

module.exports = { 
doubleFull, incFull, initializeFull, negateFull,
map, double, inc, negate,
mapRecu, mapRecu2, 
mapWithReduce
};




///array : .find .from()