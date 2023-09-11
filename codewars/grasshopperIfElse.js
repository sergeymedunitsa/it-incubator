// Grasshopper - If/else syntax debug

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }


  function checkAlive (health) {
    return health > 0 ? true : false;
}