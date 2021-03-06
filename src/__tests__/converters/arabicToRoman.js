import { arabicToRoman, basicArabicToRoman, findRomanPrefix, findMinimalDivisorIndex } from '../../converters/arabicToRoman.js'
describe('arbicToRoman.js', () => {
    describe('findRomanPrefix', () => {
        it('throws error if prefix not found', () => {
            expect(() => {
                findRomanPrefix(40)
            }).toThrow();
        });
        it('throws error if divisors index is out of range +1', () => {
            expect(() => {
                findRomanPrefix(40, 6)
            }).toThrowError('No roman prefix found: 1');
        });
        it('throws error if divisors index is out of range +2', () => {
            expect(() => {
                findRomanPrefix(40, 5)
            }).toThrowError('No roman prefix found: 2');
        });
        it.each([
            [90, 2, "X"],
            [900, 0, "C"],
            [400, 1, "C"],
            [40, 3, "X"],
            [9, 4, "I"],
        ])(' for arabic number: %d for divisior index: %d prefix: %d', (arabic, divisiorIndex, romanPrefix) => {
            expect(findRomanPrefix(arabic, divisiorIndex)).toEqual(romanPrefix);
        })
    })
    describe('basicArabicToRoman', () => {
        it.each([
            [1, "I"],
            [5, "V"],
            [10, "X"],
            [50, "L"],
            [100, "C"],
            [500, "D"],
            [1000, "M"],
        ])(' return basic roman - %d as %s', (arabic, roman) => {
            expect(basicArabicToRoman(arabic)).toEqual(roman);
        });
        it(' throw error if param arabic is not basic roman number', () => {
            expect(() => {
                basicArabicToRoman(6);
            }).toThrow();
        })

    })
    describe('arabicToRoman', () => {
        it.each([
            [1, "I"],
            [4, "IV"],
            [5, "V"],
            [10, "X"],
            [50, "L"],
            [100, "C"],
            [500, "D"],
            [1000, "M"],
            [1001, "MI"],
            [1501, "MDI"],
            [1551, "MDLI"],
            [55, "LV"],
            [1666, "MDCLXVI"],
            [666, "DCLXVI"],
            [4, "IV"],
            [90, "XC"],
            [40, "XL"],
            [400, "CD"],
            [900, "CM"],
            [940, "CMXL"],
            [2, "II"],
            [92, "XCII"],
            [1336, "MCCCXXXVI"],
            [3336, "MMMCCCXXXVI"],         
            [2019, "MMXIX"],
            [4000,'Maximum of roman number is 3999']

        ])('converts %d to %s', (arabic, roman) => {
            expect(arabicToRoman(arabic)).toEqual(roman);
        });

        it('does not convert 0 to any roman number', () => {
            expect(arabicToRoman(0)).toEqual("none");
        });
    });
    describe('findMinimalDivisorIndex', () => {
        it.each([
            [1005, 0],
            [1000,0],
            [999,0],
            [900,0],
            [1,5],
            [2,5],
            [9,4],
            [0,0],
            [-1,0]
        ])(' %d shoud find %d divisor index', (arabic,expectedIndex) => {
            expect(findMinimalDivisorIndex(arabic)).toEqual(expectedIndex);
        });
    });
});