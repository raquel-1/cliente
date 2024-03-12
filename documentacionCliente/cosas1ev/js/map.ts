function double(x:number):number{
    return x*2;
}

var  inc = (x:number):number => x+1;

function map<T,R>(f: (x:T)=> R, xs:T[]): R[]{
    var ys:R[] = []
    for (var x of xs) {
        ys.push(f(x))//f transforma el valor de x
    }
    return ys;
}




