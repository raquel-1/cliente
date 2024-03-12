var {filter, isOdd, greaterThanTwo, startVowel } = require("../filter");


describe("Pruebas de Filter", function(){
    
    test('isOdd of [1,2,5] is [1,5]',function(){
        expect(filter(isOdd,[1,2,5])).toEqual([1,5]);
    });
    test('isOdd of ["pie", "avioneta","En", "ll"] is ["pie", "avioneta"]',function(){
        expect(filter(greaterThanTwo,["pie", "avioneta","En", "ll"])).toEqual(["pie", "avioneta"]);
    });

    test('filter of [] is []',function(){
        expect(filter(isOdd, [])).toEqual([]);
    });
});



describe("Pruebas de startVowel", function(){
    it(' "" deberia ser falso ',function(){
        expect(startVowel("")).toEqual(false);
    });
    it(' "abc" deberia ser verdadero ',function(){
        expect(startVowel("abc")).toEqual(true);
    });
    it(' "Abc" deberia ser verdadero ',function(){
        expect(startVowel("Abc")).toEqual(true);
    });
    it(' "bc" deberia ser falso ',function(){
        expect(startVowel("bc")).toEqual(false);
    });
});
