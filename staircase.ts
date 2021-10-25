function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    let sharp = "";
    let space = "";

    for (let j = 0; j < n - i; j++) {
      space += " ";
    }

    for (let j = 0; j < n - (n - i); j++) {
      sharp += "#";
    }

    console.log(space + sharp);
  }
}

//      #
//     ##
//    ###
//   ####
//  #####
// ######

staircase(6);
