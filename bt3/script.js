let arr = []
let n = prompt(`nhập số lượng phần tử trong mảng`)
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = prompt(`nhập vào phần tử index[${i}]`)
    }
    let newArr = arr.filter(text => text.includes(`@`) );
    console.log(newArr.length > 0 ? newArr : "Mảng không có phần tử nào");
}