export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function generateRandomArray(length): Array<number> {
  return [];
}

export function numberToRoleMapping(roles: Array<Number>): Array<any> { 
  return [];
}