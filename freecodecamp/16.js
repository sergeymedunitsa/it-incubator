// Сравнения с логическим оператором And
// Иногда вам нужно будет тестировать более одной вещи одновременно. 
// Логический оператор and (&&) возвращает true тогда и только тогда, 
// когда операнды слева и справа от него являются истинными.

// Того же эффекта можно было бы достичь, вложив if оператор внутрь другого if.

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// Этот код вернет значение, Yes если num оно больше 5 и меньше 10. 
// Та же логика может быть написана с помощью логического оператора and .

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Замените два оператора if одним оператором, используя && оператор, который вернет строку, 
// Yes если val меньше или равно 50 и больше или равно 25. В противном случае будет 
//возвращена строка No.

function testLogicalAnd(val) {
  // Only change code below this line

 if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);