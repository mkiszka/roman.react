function findRomanSuffix(arabic) {
    throw new Error('No roman suffix found');
}
function basicArabicToRoman(arabic) {
    const basicRomans = new Map([
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ]);

    if ( basicRomans.has(arabic))  {
        return basicRomans.get(arabic);
    }      
    throw new Error(`${arabic} does not represent basic roman number`);
}
const divisors = [1000, 500, 100, 50, 10, 5]
function arabicToRoman(arabic, divisorIndex = 0) {
    let divisor = divisors[divisorIndex];
    let div = arabic / divisor;
    let floor = Math.floor(div)
    let mod = arabic % divisor;

    let roman = "none";

    if (floor === 1) {
        roman = basicArabicToRoman(divisor);
        if (mod > 0) {
            roman += arabicToRoman(mod);
        }
        return roman;
    }
    if (floor === 0 && mod > 0) {
        try {
            roman = basicArabicToRoman(mod);
        } catch {
            return arabicToRoman(mod, ++divisorIndex);
        }
        return roman;

    }

    return roman;


}
export { arabicToRoman, basicArabicToRoman, findRomanSuffix }