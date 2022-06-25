import { arabicToRoman } from '../../converters/arabicToRoman.js'

describe('arabicToRoman', () => {
    it.each([
        [1,"I"],
        [5,"V"],
        [10,"X"],
        [50,"L"],
        [100,"C"],
        [500,"D"],
        [1000,"M"]

    ])('converts %s to %d', (arabic, roman) => {
        expect(arabicToRoman(arabic)).toEqual(roman);
    });  
    
    it('does not convert 0 to any roman number', () => {
        expect(arabicToRoman(0)).toEqual("none");
    });
});