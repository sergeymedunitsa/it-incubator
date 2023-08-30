// Adding a Default Option in Switch Statements

// В инструкции switch вы, возможно, не сможете указать все возможные значения в качестве 
// инструкций case. Вместо этого вы можете добавить инструкцию по умолчанию, 
// которая будет выполнена, если не будут найдены соответствующие инструкции case. 
// Думайте об этом как о последнем операторе else в цепочке if/else.

// Оператор Default по умолчанию должен быть последним регистром.

// Пример 

switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
  ...
    default:
      defaultStatement;
      break;
  }


//   Напишите инструкцию switch, чтобы задать ответ для следующих условий:

// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
    let answer = "";
        switch(val) {
          case "a":
            answer = "apple"
            break;
          case "b":
            answer = "bird"
            break;
          case "c":
            answer = "cat"
            break;
          default:
            answer = "stuff";
            break;
        }
    return answer;
  }
  
  switchOfStuff(1);