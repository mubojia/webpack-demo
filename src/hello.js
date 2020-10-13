import stack from './common/stack';

let Hello = () => {

    let Stack = new stack();

    console.log(Stack);
    Stack.push(12);
    console.log(Stack);
    return Stack;
}
export default Hello();