function basicArabicToRoman(arabic) {
    if (arabic === 1) {
        return "I";
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
}
function arabicToRoman(arabic) {
    let divisor = 1000
    let div = arabic / divisor
    let floor = Math.floor(div)
    let mod = arabic % divisor;

    let roman = "none";

    if (floor === 1) {
        roman = basicArabicToRoman(divisor);        
        if( mod > 0 ) {
            roman += arabicToRoman(mod);
        }
        return roman;
    } 
    if (floor === 0 && mod > 0) {
        roman = basicArabicToRoman(mod);                     
        return roman;
        
    }
    
    return roman;
    
    
}
export { arabicToRoman, basicArabicToRoman }