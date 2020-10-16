import { has } from 'lodash';
import HashTableLinearProbing from './common/DataListClass/HashTable/HashTableLinearProbing';

function component() {

  // 斐波那契数列
  // function fibonacciIterative(n) {
  //   if (n < 1) return 0;
  //   if (n < 2) return 1;

  //   let fibNMinus2 = 0;
  //   let fibNMinus1 = 1;
  //   let fibN = n;

  //   for(let i = 2; i <= n; i++) {
  //     fibN = fibNMinus1 + fibNMinus2;
  //     fibNMinus2 = fibNMinus1;
  //     fibNMinus1 = fibN;
  //   }

  //   return fibN;
  // }
  // console.log(fibonacciIterative(5));

  // 斐波那契数列——递归
  // function fibonacci(n) {
  //   console.log(n);
  //   if (n < 1) return 0;
  //   if (n < 2) return 1;

  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // }
  // console.log(fibonacci(5));

  // 记忆化斐波那契数列
  function fibonacciMemoization(n) {
    if (n < 1) { return 0; }
    const memo = [0, 1];
    const fibonacciMem = num => {
      if (memo[num] != null) { return memo[num]; }
      return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
    };
    return fibonacciMem(n);
  }

  console.log(fibonacciMemoization(5));


  // let i = 0;
  // function reFn(){
  //     i++;
  //     reFn();
  // }

  // try {
  //   reFn();
  // } catch (ex) {
  //   console.log('i = ' + i + ' ettor: ' + ex);
  // }


  // function factorial(n) {
  //   console.trace();
  //   if(n === 0 || n === 1) {
  //     return 1;
  //   }
  //   return n * factorial(n -1);
  // }
  // console.log(factorial(3));

  const element = document.createElement('div');
  return element;
}

document.body.appendChild(component());