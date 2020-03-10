
class NoInteligencia {
    constructor(table, possibilidades) {
        this.table = table
        this.possibilidades = possibilidades
    }
}




function areEqual() {
    var len = arguments.length;
    for (var i = 1; i < len; i++) {

        if (arguments[i] === null || arguments[i] !== arguments[i - 1] || arguments[i] === "")
            return false;
    }
    return true;
}
const verificar = (table) => {
    //horizontal
    if (areEqual(table[0], table[1], table[2]) || areEqual(table[3], table[4], table[5]) || areEqual(table[6], table[7], table[8])) {
        return true
    }
    //vertical
    if (areEqual(table[0], table[3], table[6]) || areEqual(table[1], table[4], table[7]) || areEqual(table[2], table[5], table[8])) {
        return true


    }
    //diagonal

    if (areEqual(table[0], table[4], table[8]) || areEqual(table[2], table[4], table[6])) {
        return true

    }

    return false
}


export const melhorPossibilidade = table => {
    let no = NoInteligencia(table,[]);

    
}