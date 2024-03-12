/**
 * crear array que reciba una lista de palabras y que devuelva el numero de consonates de 
 * la palabra que mas consonantes diferentes tiene
 * 
 * cree funcion que reciba un array de numeross que devuela el mayor numero 
 * 
 * cree una funcion que reciba un array que se aun alista de palabras y cree el acronimo 
 * de ellas 
 *
 */

palabras=["organizacion", "Naciones", "unidAs"];

numeross = [2, 5, -28, 5, 110, 4, 11];

numeritos=[1,2,3];


function reduce(f, init, xs){
    var acc=init;
    for(var x of xs){
        acc =f(acc, x);
    }
    return acc;
}

var add= (x,y) => x + y ;

var max= (x,y) => ( x > y ? x : y );

var acronymize = (acronym, word) =>
    word.length === 0 ? "" : acronym + word[0].toUpperCase();

var consonants = "bcdfghjklmnñpqrstvwxyz";

var uniqueChars = (chars ,word) => 
    Array.from(new Set(word.toLowerCase().match(new RegExp(`[${chars}]`, "g"))));


var moreUniqueConsonantsThan = (maxLength, word) => 
    max(maxLength, uniqueChars(consonants, word).length)



///////////REDUCE RECUSIVO

function recuReduce(f, acc, xs){
    if(xs.length === 0){
        return acc;
    }else{
        var[head, ...tail]= xs;
        acc = f(acc,head);
        return recuReduce(f, acc, tail);
    }
}


function recuReduce2(f, acc, xs){
    if(xs.length === 0){
        return acc;
    }else{
        var last = xs[xs.length - 1];
        var header = xs.slice(0, xs.length-1);
        var[head, ...tail]= xs;
        return f(recuReduce2(f, acc, header),last);
    }
}



module.exports = { reduce, acronymize,
    add, max, uniqueChars, consonants, 
    moreUniqueConsonantsThan,
    recuReduce, recuReduce2}



////////////FUNCIONES ENTERAS
/*
function sumaArray(numeross) {
    var suma = 0;
    for (var i = 0; i < numeross.length; i++) {
        suma+=numeross[i];
    }
    return suma;
}
//console.log(sumaArray(numeritos));

function acronimize(palabras) {
    var firstLetter = "";
    for (var i = 0; i < palabras.length; i++) {
        firstLetter+=palabras[i].charAt(0).toUpperCase();
    }
    return firstLetter;
}

//console.log(acronimize(palabras));


function returnOlderNumber(numeross) {
    var mayor = Math.max(...numeross);
    return mayor;
}

//console.log(returnOlderNumber(numeross));

*/



