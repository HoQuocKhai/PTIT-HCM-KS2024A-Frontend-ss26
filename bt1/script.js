let arr = []
let n = +prompt(`nhập số phần tử trong mảng`)
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
        if (isNaN(Number(arr[i]))){
            console.log(`Dữ liệu không hợp lệ`)
            arr = []
            break
        }
    }
    let newArr = arr.filter(num => num >= 10);
    console.log(newArr.length > 0 ? newArr : "Mảng không có phần tử nào");
}
