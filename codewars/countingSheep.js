// Рассмотрим массив / список овец, в котором некоторые овцы могут отсутствовать 
// на своем месте. Нам нужна функция, которая подсчитывает количество овец, 
// присутствующих в массиве (true означает "присутствует").

function countSheeps(sheep) {
    let result = 0;

    for(let i = 0; i < sheep.length; i++) {
        if(speep[i]){
            result ++
        }
    } 
    return result
  }



function countSheeps(sheep) {
    return sheep.filter(Boolean).length
}
