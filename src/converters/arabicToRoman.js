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
        if (divisor === 1) {
            roman = "I";
        } else if (divisor === 5) {
            roman = "V";
        } else if (divisor === 10) {
            roman = "X";
        } else if (divisor === 50) {
            roman = "L";
        } else if (divisor === 100) {
            roman = "C";
        } else if (divisor === 500) {
            roman = "D";
        } else if (divisor === 1000) {
            roman = "M";
        }
        if( mod > 0 ) {
            roman += arabicToRoman(mod);
        }
        return roman;
    } 
    if (floor === 0 && mod > 0) {
        if (mod === 1) {
            roman = "I";
        } else if (mod === 5) {
            roman = "V";
        } else if (mod === 10) {
            roman = "X";
        } else if (mod === 50) {
            roman = "L";
        } else if (mod === 100) {
            roman = "C";
        } else if (mod === 500) {
            roman = "D";
        } else if (mod === 1000) {
            roman = "M";
        }
       
        return roman;
        
    }
    
    return roman;
    
    
}
export { arabicToRoman, basicArabicToRoman }