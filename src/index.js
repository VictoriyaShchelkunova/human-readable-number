module.exports = function toReadable(number) {
    const formOneToTen = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
    const formTenToNineteen = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
    const tens = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
    const numStr = number + '';
    switch (numStr.length) {
        case 1: {
            if(numStr === '0'){
                return 'zero';
            }
            return getNumFromOneToTen(numStr);
        }
        case 2: {
            return getTens(numStr);
        }
        case 3: {
            return getHundreds(numStr);
        }
        default: {
            return 'Write the coreect number!'
        }
    }
    function getNumFromOneToTen(numStr) {
        return formOneToTen[numStr];
    };

    function getTens(numStr) {
        if (numStr[0] === '1') {
            return formTenToNineteen[numStr];
        }
        if (numStr[1] === '0') {
            return `${tens[numStr[0]]}`;
        }
        return `${tens[numStr[0]]} ${getNumFromOneToTen(numStr[1])}`;
    }

    function getHundreds(numStr) {
        if (numStr[1] === '0' && numStr[2] !== '0') {
            return `${getNumFromOneToTen(numStr[0])} hundred ${getNumFromOneToTen(numStr[2])}`;
        }
        if (numStr[1] === '0' && numStr[2] === '0') {
            return `${getNumFromOneToTen(numStr[0])} hundred`;
        }
        return `${getNumFromOneToTen(numStr[0])} hundred ${getTens(numStr.slice(1))}`;
    }
}
