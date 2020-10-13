import Deque from '../deque';

let palindromeChecker = (aString) => {
    if(aString === undefined || aString === null || (aString !== null && aString.length === 0)){
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for(let i = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        console.log(lowerString, firstChar, lastChar);
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    return isEqual;
}

export default palindromeChecker;