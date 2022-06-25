function arabicToRoman(arabic) {
    let roman = "none";
    if (arabic == 1) {
        roman = "I";
    } else if (arabic == 5) {
        roman = "V";
    } else if (arabic == 10) {
        roman = "X";
    }
    return roman;
}
export { arabicToRoman }