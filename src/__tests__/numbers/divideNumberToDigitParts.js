import { divideNumberToDigitParts } from "../../numbers/divideNumberToDigitParts";

describe('function divideNumerToDigitParts', () => {
    it.each([
        [10, [0, 1]],
        [40, [0, 4]],
        [569, [9, 6, 5]],
        [45692847, [7, 4, 8, 2, 9, 6, 5, 4]],
    ])(' for %d should return %s array', (number, expectedArray) => {
        expect(divideNumberToDigitParts(number)).toEqual(expectedArray);
    });

});