// Debug celsius converter

// Ваш друг путешествует за границу, в Соединенные Штаты, поэтому он написал программу 
// для преобразования градусов по Фаренгейту в градусы Цельсия. 
// К сожалению, в его коде есть некоторые ошибки.
// Найдите ошибки в коде, чтобы заставить преобразователь Цельсия работать должным образом.
// Чтобы перевести градусы Фаренгейта в градусы Цельсия:

celsius = (fahrenheit - 32) * (5/9)

// Помните, что обычно температуры в текущих погодных условиях указаны в целых числах. 
// Датчики температуры могут сообщать о температуре с более высокой точностью, например, 
// с точностью до десятой доли. Однако погрешность прибора делает такого рода 
// точность ненадежной для многих типов датчиков измерения температуры.

function weatherInfo (temp) {
    var c : convert(temp)
    if (c > 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (tempertur) - 32 + (5/9)
    return temperature
  }


function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c <= 0) {
      return (c + " is freezing temperature")
    } else {
      return (c + " is above freezing temperature")
    }
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32)  * (5/9);
       return celsius;
  }