// Comparisons with the Logical Or Operator

// Логический оператор or (||) возвращает значение true, если любой из операндов имеет значение 
// true. В противном случае он возвращает значение false.
// Логический оператор or состоит из двух символов канала: (||). 
// Обычно это можно найти между клавишами Backspace и Enter.

// Приведенный ниже шаблон должен выглядеть знакомым по предыдущим путевым точкам.
if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
  return "Yes";

//   Пример

if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";


// Этот код вернет значение Yes, если число находится в диапазоне от 5 до 10 
// (включая 5 и 10). Та же логика может быть записана с помощью логического оператора or.

// Решение:

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
