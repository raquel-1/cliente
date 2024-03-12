var {compose, pipe,
    double, inc,
    curryMap,curryFilter
} = require("../compose");

var {filter, isOdd, greaterThanTwo, startVowel } = require("../filter");

var {map} = require("../map");

describe("COMPOSICION DE FUNCIONES", function(){
    
    test('test de filter con map',function(){
        expect(filter(isOdd,[1,2,4,5],6)).toEqual([1,5]);
    });
    test('aplico filter con isOdd y despues incremento',function(){
        expect(map(inc,filter(isOdd,[1,2,4,5,6]))).toEqual([2,6]);
    });
    test('test de map con compose',function(){
        expect(map( compose(isOdd,inc), [1,2,3])).toEqual([false,true,false]);
    });
    
    test('el inc de [[1, 2, 3],[4,5,6]] ->[[2,3,4],[5,6,7]]',function(){
        expect(
            map(curryMap(inc), [[1, 2, 3],[4,5,6]])
        ).toEqual([[2,3,4],[5,6,7]]);
    });
});

describe("Pruebas de CurryMap", function(){
    test('con curryMap doble de [1, 2, 5] es [2, 4, 10]',function(){
        expect(curryMap(double)([1, 2, 5])).toEqual([2, 4, 10]);
    });
});

describe("Pruebas de CurryFilter con CurryMap", function(){
    test('test de curryFilter con curryMap',function(){
        expect(
            compose(curryMap(double),curryFilter(isOdd))([1,2,3])
            ).toEqual([2, 6]);
    });
});

describe("Pruebas de Compose", function(){
    test('la composicion de (double,inc)(7) es 16',function(){
        expect(compose(double,inc)(7)).toEqual(16);
    });
    test('la pipe de (double,inc)(7) es 15',function(){
        expect(pipe(double,inc)(7)).toEqual(15);
    });

    test('el doble del incremento de [1, 2, 5] es [4, 6, 12]',function(){
        expect(map(compose(double,inc),[1, 2, 5])).toEqual([4, 6, 12]);
    });
});

