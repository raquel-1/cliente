function reduce<T,R>(f: (acc:R, x: T)=> R , init: R, xs:T[]): R{
    
    var acc:R = init;

    for(var x of xs){

        acc =f(acc, x);
    }

    return acc;
}
