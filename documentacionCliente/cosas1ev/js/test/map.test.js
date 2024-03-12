var {doubleFull,incFull,initializeFull,
map, double, inc, negate,
mapRecu, mapRecu2, 
mapWithReduce
} = require("../map");


//al probar la funcion map ya no es necesario las pruebas del resto de funciones 
describe("Pruebas de map y mapWithReduce", function(){
    
    test('double of [2,4,6] is [3,5,7]',function(){
        expect(map(inc,[2,4,6])).toEqual([3,5,7]);
    });

    test('double of [2,4,6] is [4,8,12]',function(){
        expect(map(double,[2,4,6])).toEqual([4,8,12]);
    });

    test('double of [2,4,6] is [4,8,12]',function(){
        expect(mapWithReduce(double,[2,4,6])).toEqual([4,8,12]);
    });
    
    test('identity of [2,4,6] is [2,4,6]',function(){
        expect(map(x => x, [2,4,6])).toEqual([2,4,6]);
    });

    test('map of [] is []',function(){
        expect(map(x => x, [])).toEqual([]);
    });

    test('negate of [false, false, true, false] is [true, true, false, true]',function(){
        expect(map(negate, [false, false, true, false])).toEqual([true, true, false, true]);
    });
});

////////Pruebas de mapRecu
describe("Pruebas de mapRecu", function(){

    test('double of [2,4,6] is [4,8,12]',function(){
        expect(mapRecu(double,[2,4,6])).toEqual([4,8,12]);
    });

    test('double of [2,4,6] is [4,8,12]',function(){
        expect(mapRecu2(double,[2,4,6])).toEqual([4,8,12]);
    });
    
});




///////////PRUEBAS DE LAS FUNCIONES ENTERAS
describe("Pruebas de doubleFull", function(){
    test('doubleFull of [2,4,6] is [4,8,12]',function(){
        expect(doubleFull([2,4,6])).toEqual([4,8,12]);
    });
    
    test('doubleFull of [] is []',function(){
        expect(doubleFull([])).toEqual([]);
    });
});


describe("Pruebas de incFull", function(){
    test('incFull of [2,4,6] is [3,5,7]',function(){
        expect(incFull([2,4,6])).toEqual([3,5,7]);
    });
    
    test('incFull of [] is []',function(){
        expect(incFull([])).toEqual([]);
    });
});


describe("Pruebas de initializeFull", function(){
    test('initializeFull of ["raquel", "juan", "pepe"] is ["Raquel", "Juan", "Pepe"]',function(){
        expect(initializeFull(["raquel", "juan", "pepe"])).toEqual(["Raquel", "Juan", "Pepe"]);
    });
    
    test('initializeFull of [] is []',function(){
        expect(initializeFull([])).toEqual([]);
    });
    
    test('initializeFull of ["p"] is ["P"]',function(){
        expect(initializeFull(["p"])).toEqual(["P"]);
    });
    
    test('initializeFull of ["1p"] is ["1p]',function(){
        expect(initializeFull(["1p"])).toEqual(["1p"]);
    });
    
    test('initializeFull of [""] is [""]',function(){
        expect(initializeFull([""])).toEqual([""]);
    });
});





