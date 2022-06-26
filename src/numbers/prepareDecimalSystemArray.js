function prepareDecimalSystemArray(number) {
    const str = new String(number);
    let decimalParts = [];
    for (let index = str.length - 1; index >= 0; index--) {
        const element = parseInt(str[index].padEnd(str.length - index, "0"));
        decimalParts.push(element);
    }
    return decimalParts;
}

export { prepareDecimalSystemArray };