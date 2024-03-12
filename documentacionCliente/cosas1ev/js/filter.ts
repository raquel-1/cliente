function filter<T>(f: (x:T) => boolean, xs:T[]) : T[]{
    var ys:T[] = [];
    for (var x of xs) {
        if(f(x)){
            ys.push(x);
        }
    }
    return ys;
}

