var double = number=> number * 2;


var inc = number=> number + 1;


////de derecha a izq como em mates
function compose (f, g ) { 
    return function(x){
        return f(g(x));
    }
}
console.log(compose(inc,double)(4));


/////de izq a drch
function pipe (f, g )  { 
    return function(x){
        return g(f(x));
    }
}
console.log(pipe(inc,double)(4));

///////////////CURRYMAP
function curryMap(f) {
    return function(xs){
        var ys = [];
        for (var x of xs) {
        ys.push(f(x));//f transforma el valor de x
        }
        return ys;
    }
}
/*
map con filter no se puede componer ano se que hagamaos currificacion
funciones landa reciben un parametro
*/


//////////CURRYFILTER
function curryFilter(p){
    return function(xs){
        var ys = [];
        for (var x of xs) {
            if(p(x)){
                ys.push(x);
            }
        }
        return ys;
    }
}



module.exports = { 
    compose, pipe,
    double, inc,
    curryMap,curryFilter
};


/*
funcion flat quita una capa en programacion funcional ultima clase
Tengo que aprender programacion funcional mas enserio


typeof NaN es number


me queda POO y svelt

*/



