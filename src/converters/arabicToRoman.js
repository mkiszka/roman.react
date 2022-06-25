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
    }
    return roman;
}
export { arabicToRoman }