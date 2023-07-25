/*Під час співбесіди вас просять створити програму, яка перевіряє, чи можна сформувати заданий рядок S 
з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.

Умова в тому, що символи в P1 і P2 мають бути в тому самому порядку, що й у S.

Інтерв’юер наводить вам наступний приклад:

'radency' можна сформувати за допомогою 'rdnc’ та 'aey':

    S:  'radency'

    P1: 'rdnc'

    P2: 'aey'

*/

const stringChecker = function (s, p1, p2) {

    if (s.length !== p1.length + p2.length) {
      return false;
    }
  
    if (s.length === 0) {
      return true;
    }
  
    if (
      (p1.length > 0 && s[0] === p1[0] && stringChecker(s.slice(1), p1.slice(1), p2)) ||
      (p2.length > 0 && s[0] === p2[0] && stringChecker(s.slice(1), p1, p2.slice(1)))
    ) {
      return true;
    }
  
    return false;
  };

console.log(stringChecker('radency', 'rdnc', 'aey'));