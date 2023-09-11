// Get ascii value of character

// Получить ASCII-значение символа.
// Для получения таблицы ASCII вы можете обратиться к http://www.asciitable.com/

// Если вам нужно получить код символа в JavaScript, вы можете использовать метод charCodeAt. 
// Вот пример:

let str = "Hello, World!";
let char = str.charAt(0);
let code = char.charCodeAt(0);
console.log(code); // Вывод: 72

// В этом примере мы извлекаем первый символ строки (H) и получаем его код символа.

function getASCII(c){
    return c.charCodeAt(0)
  }