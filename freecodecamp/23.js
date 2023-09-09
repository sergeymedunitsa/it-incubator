// Тестирование объектов на наличие свойств

// Чтобы проверить, существует ли свойство для данного объекта или нет, 
// вы можете использовать метод .hasOwnProperty(). SomeObject.hasOwnProperty(SomeProperty) 
// возвращает значение true или false в зависимости от того, 
// найдено свойство в объекте или нет.

// Example
function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

//   Первый вызов функции checkForProperty возвращает значение true, 
//   в то время как второй возвращает значение false.

// Solution

function checkObj(obj, checkProp) {
    // Only change code below this line
     if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }

//   Измените функцию checkObj, чтобы проверить, 
//   содержит ли объект, переданный в параметр функции obj, 
//   конкретное свойство, переданное в параметр функции checkProp. 
//   Если свойство, переданное в checkProp, найдено в obj, 
//   верните значение этого свойства. Если нет, то возврат не найден.