function spiralOrder(matrix) {
    let result = [];
    while (matrix.length > 0) {
        result = result.concat(phase0(matrix));
        if (matrix.length === 0)
            break;
        result = result.concat(phase1(matrix));
        if (matrix.length === 0)
            break;
        result = result.concat(phase2(matrix));
        if (matrix.length === 0 || matrix[0].length === 0)
            break;
        result = result.concat(phase3(matrix));
    }
    return result;
}
;
const phase0 = (matrix) => {
    return matrix.shift();
};
const phase1 = (matrix) => {
    return matrix.map(arr => arr.pop());
};
const phase2 = (matrix) => {
    return matrix.pop().reverse();
};
const phase3 = (matrix) => {
    return matrix.map(arr => arr.shift()).reverse();
};
console.log(spiralOrder([[7], [9], [6]]));
//# sourceMappingURL=SpiralMatrix.js.map