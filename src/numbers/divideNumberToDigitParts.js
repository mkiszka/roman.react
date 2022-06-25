function divideNumberToDigitParts(number) {
    const str = new String(number);
    let digitParts = [];
    for (let index = str.length - 1; index >= 0; index--) {
        const element = parseInt(str[index]);
        digitParts.push(element);
    }
    return digitParts;
}

export { divideNumberToDigitParts }