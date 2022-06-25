function basicArabicToRoman(arabic) {
    if (arabic === 1) {
        return "I";
    } else if (arabic === 4) {
        return "IV";
    } else if (arabic === 5) {
        return "V";
    } else if (arabic === 10) {
        return "X";
    } else if (arabic === 50) {
        return "L";
    } else if (arabic === 100) {
        return "C";
    } else if (arabic === 500) {
        return "D";
    } else if (arabic === 1000) {
        return "M";
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
export { arabicToRoman, basicArabicToRoman }