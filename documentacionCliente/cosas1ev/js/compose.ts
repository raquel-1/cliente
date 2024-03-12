////de izquierda a derecha
function compose <T, R, S>(f: (x:T) => R, g: (y : R) => S ) : (x:T) => S { 
    return function(x:T){
        return g(f(x));
    }
}


/////de derecha a izquierda
function composeMates <T, R, S>(f: (y:S) => T, g: (x : R) => S ) : (x:R) => T { 
    return function(x:R){
        return f(g(x));
    }
}


var double = number=> number * 2;

var inc = number=> number + 1;


//console.log(compose(inc,double)(4));
