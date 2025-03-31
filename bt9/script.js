let arr = []
let n = +prompt(`nhập số lượng phần tử trong mảng`)
function totalEven(num){
    for (let i = 1; i <= num; i++){
        if (num % 2 === 0){
        }
    }
}
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
    }
    let totalEven  = arr.filter(num => num % 2 === 0)
    let totalOdd  = arr.filter(num => num % 2 !== 0)
    totalEven = totalEven.reduce((acc,curr) => acc + curr, 0)
    totalOdd = totalOdd.reduce((acc,curr) => acc + curr, 0)
    console.log(`Mảng ban đầu:`, arr)
    console.log(`totalEven = `, totalEven)
    console.log(`totalOdd = `, totalOdd)
}