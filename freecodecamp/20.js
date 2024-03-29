// Golf Code

// В игре в гольф каждая лунка имеет номинал, то есть среднее количество ударов, 
// которое, как ожидается, сделает игрок в гольф, чтобы загнать мяч в лунку и завершить игру. 
// В зависимости от того, насколько выше или ниже номинала ваши удары, есть разные прозвища.

// Вашей функции будут переданы аргументы par и strokes. 
// Верните правильную строку в соответствии с этой таблицей, 
// в которой перечислены штрихи в порядке приоритета; 
// сверху (самый высокий)
// снизу (самый низкий):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes <= par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par +2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  } else {
    return "Change Me";
  }
}

golfScore(5, 4);