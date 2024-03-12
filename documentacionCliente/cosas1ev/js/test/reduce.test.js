var {reduce, add, max, uniqueChars, consonants, acronymize,
    moreUniqueConsonantsThan, recuReduce, recuReduce2} = require("../reduce");

describe("Pruebas de reduce", function(){
    
    it('should be 8 the sum of [1,2,5]',function(){
        expect(reduce(add, 0, [1,2,5])).toBe(8);
    });
    it('should be 0 the sum of []',function(){
        expect(reduce(add, 0, [])).toBe(0);
    });
    it('should be 8 the max of [1,8,5]',function(){
        expect(reduce(max, 0, [1,8,5])).toBe(8);
    });
    it('should be 0 the max of []',function(){
        expect(reduce(max, 0, [])).toBe(0);
    });
    it('should be 0 the max uniqueChars [1]',function(){
        expect(reduce(max, undefined, [1])).toBe(1);
    });
    test('with moreUniqueConsonantsThan',function(){
        expect(
            reduce(moreUniqueConsonantsThan, 0, [
                "pePeLuis", 
                "rodrigo", 
                "ppppppppllllll"])).toBe(3);
    });


    it('the acronym of organizacion naciones unidas',function(){
        expect(reduce(acronymize, "", ["organizacion", "naciones", "unidas"])).toBe("ONU");
    });

    
    it('the acronym of organizacion naciones unidas',function(){
        expect(recuReduce(acronymize, "", ["organizacion", "naciones", "unidas"])).toBe("ONU");
    });
    it('the acronym of organizacion naciones unidas',function(){
        expect(recuReduce2(acronymize, "", ["organizacion", "naciones", "unidas"])).toBe("ONU");
    });

    it('should be 8 the sum of [1,2,5]',function(){
        expect(recuReduce(add, 0, [1,2,5])).toBe(8);
    });
    it('should be 8 the sum of [1,2,5]',function(){
        expect(recuReduce2(add, 0, [1,2,5])).toBe(8);
    });
});


describe("Pruebas de uniqueChars", function(){
    test(" 'pePeLuis' have p, l, s consonants",function(){
        expect(uniqueChars(consonants, "pePeLuis")).toEqual(["p", "l", "s"]);
    });
});






