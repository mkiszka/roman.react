import { prepareDecimalSystemArray } from "../../numbers/prepareDecimalSystemArray";

describe('prepareDcimalSystemArray', () => {
    it.each([
        [3, [3]],
        [10, [0, 10]],
        [40, [0, 40]],
        [569, [9, 60, 500]],
        [45692847, [7, 40, 800, 2000, 90000, 600000, 5000000, 40000000]],
    ])(' for %d should return %s array', (number, expectedArray) => {
        expect(prepareDecimalSystemArray(number)).toEqual(expectedArray);
    });
    
});