import { arabicToRoman } from '../../converters/arabicToRoman.js'

describe('arabitToRoman', () => {
    it.each([
        [1,"I"],
        [5,"V"]    
    ])('converts %s to %d', (arabic, roman) => {
        expect(arabicToRoman(arabic)).toEqual(roman);
    });  
    
    it('does not convert 0 to any roman number', () => {
        expect(arabicToRoman(0)).toEqual("none");
    });
});