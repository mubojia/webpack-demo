import Stack from "../stack";

let DecimalToBinary = (decNumber, base) => {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = decNumber;
    let rem;
    let binaryString = '';

    if(!(base >=2 && base <= 36)){
        return '';
    }

    while(number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while(!remStack.isEmpty()){
        binaryString += digits[remStack.pop()];
    }    

    return binaryString;
}

export default DecimalToBinary;