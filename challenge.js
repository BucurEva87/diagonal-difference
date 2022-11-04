function diagonalDifference(arr) {
    let pSum = 0
    let sSum = 0
    
    // Find out the primary diagonal sum
    for (let i = 0; i < arr.length; i++) {
        pSum += arr[i][i]
    }
    
    // Find out the secondary diagonal sum
    for (let i = 0; i < arr.length; i++) {
        sSum += arr[i][arr.length-1 - i]
    }
    
    return Math.abs(pSum - sSum)
}
