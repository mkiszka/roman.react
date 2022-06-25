function arabicToRoman(arabic) {
    let roman = "none";
    if (arabic == 1) {
        roman = "I";
    } else if (arabic === 5) {
        roman = "V";
    } else if (arabic === 10) {
        roman = "X";
    } else if (arabic === 50) {
        roman = "L";
    } else if (arabic === 100) {
        roman = "C";
    } else if (arabic === 500) {
        roman = "D";
    } else if (arabic === 1000) {
        roman = "M";
    }
    return roman;
}
export { arabicToRoman }