import { prepareDecimalSystemArray } from "../numbers/prepareDecimalSystemArray";
const divisors = [1000, 500, 100, 50, 10, 5, 1];
const basicRomans = new Map([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"]
]);
function findMinimalDivisorIndex(arabic) {
    for (let index = 0; index < divisors.length; index++) {
        const divisor = divisors[index];
        if (arabic >= divisor) {
            return index > 0 ? index - 1 : 0;
        }
    }
    throw new Error('can not find minimal divisor index for %s', arabic);
}

function findRomanPrefix(arabic, divisorIndex) {
    const divisor = divisors[divisorIndex];
    let nextDivisor;
    if (divisorIndex + 1 < divisors.length) {
        nextDivisor = divisors[divisorIndex + 1];
    } else {
        throw new Error('No roman prefix found: 1');
    }
    if (divisor - nextDivisor === arabic) {
        return basicArabicToRoman(nextDivisor);
    }

    if (divisorIndex + 2 < divisors.length) {
        nextDivisor = divisors[divisorIndex + 2];
    } else {
        throw new Error('No roman prefix found: 2');
    }
    if (divisor - nextDivisor === arabic) {
        return basicArabicToRoman(nextDivisor);
    }
    throw new Error('No roman prefix found');
}

function basicArabicToRoman(arabic) {

    if (basicRomans.has(arabic)) {
        return basicRomans.get(arabic);
    }
    throw new Error(`${arabic} does not represent basic roman number`);
}

function arabicToRoman(arabic) {
    if (arabic === 0) return "none";

    let roman = "";
    const decimalParts = prepareDecimalSystemArray(arabic);

    for (let index = 0; index < decimalParts.length; index++) {
        const element = decimalParts[index];
        if (element !== 0 || index !== 0) {
            roman = singlePositionArabicToRoman(element, element===0?0:findMinimalDivisorIndex(element)) + roman;
        }

    }
    return roman;


    function singlePositionArabicToRoman(arabic, divisorIndex = 0) {
        let divisor = divisors[divisorIndex];
        let div = arabic / divisor;
        let floor = Math.floor(div)
        let mod = arabic % divisor;

        let roman = "";

        if (floor >= 1) {
            for (let index = 0; index < floor; index++) {
                roman += basicArabicToRoman(divisor);
            }

            if (mod > 0) {
                roman += singlePositionArabicToRoman(mod);
            }
            return roman;
        }
        if (floor === 0 && mod > 0) {
            try {
                roman = basicArabicToRoman(mod);
            } catch {
                let prefix;
                try {
                    prefix = findRomanPrefix(mod, divisorIndex);
                } catch (error) {
                    return singlePositionArabicToRoman(mod, ++divisorIndex);
                }
                return prefix + basicArabicToRoman(divisor);

            }
            return roman;

        }

        return roman;


    }
}
export { arabicToRoman, basicArabicToRoman, findRomanPrefix, findMinimalDivisorIndex }