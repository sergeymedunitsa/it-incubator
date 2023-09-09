// Поиск профиля

// Функция lookUpProfile, которая принимает name и свойство (prop) в качестве аргументов, 
// была предварительно написана для вас.
// Функция должна проверить, является ли name именем фактического контакта, 
// а данное свойство (prop) является свойством этого контакта.
// Если оба значения равны true, то верните "значение" этого свойства.
// Если имя не соответствует ни одному контакту, то верните строку No such contact.
// Если prop не соответствует ни одному допустимому свойству контакта, 
// найденному для соответствия имени, то верните строку No such property.

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
    return "No such contact";
  }
  // Change these values to test your function
  var data = lookUpProfile("Sherlock", "hello");
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");