import { arabicToRoman, basicArabicToRoman } from '../../converters/arabicToRoman.js'
describe('arbicToRoman.js', () => {
    describe('basicArabicToRoman', () => {
        it.each([
            [1, "I"],
            [5, "V"],
            [10, "X"],
            [50, "L"],
            [100, "C"],
            [500, "D"],
            [1000, "M"],
        ])(' return basic roman - %d as %s', (arabic,roman) => {
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
            [666, "DCLXVI"]

        ])('converts %d to %s', (arabic, roman) => {
            expect(arabicToRoman(arabic)).toEqual(roman);
        });

        it('does not convert 0 to any roman number', () => {
            expect(arabicToRoman(0)).toEqual("none");
        });
    });
});