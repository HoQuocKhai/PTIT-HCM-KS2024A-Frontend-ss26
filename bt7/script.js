let arr = []
let n = +prompt(`nhập số lượng phần tử trong mảng`)
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
    }
    let newArr = arr.map(num => num * 2)
    let evenArr = newArr.filter(num => num % 2 === 0)
    console.log(`Mảng ban đầu:`, arr)
    console.log(`Mảng sau khi nhân đôi:`, newArr)
    console.log(`Các số chẵn trong mảng mới:`, evenArr)
}