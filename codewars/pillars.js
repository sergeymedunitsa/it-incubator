// Pillars

// // Рядом с дорогой стоят столбы. Расстояние между столбами одинаковое, 
// а ширина столбов одинаковая. 
// Ваша функция принимает три аргумента:

// 1. количество опор (≥ 1);
// 2. расстояние между столбами (10 - 30 метров);
// 3. ширина столба (10 - 50 сантиметров).

// Рассчитайте расстояние между первым и последним столбом в сантиметрах 
// (без учета ширины первого и последнего столбов).

function pillars(numPill, dist, width) {
    if (numPill === 1) return 0;
    return (dist * (numPill - 1) * 100) + (width * (numPill - 2));
  }