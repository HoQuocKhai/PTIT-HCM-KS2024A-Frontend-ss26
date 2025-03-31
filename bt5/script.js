let arr = []
let n = +prompt(`nhập số lượng phần tử trong mảng`)
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
    }
    console.log(arr)
    let max = arr[0]
    for(let num of arr){
        if (max < num){
            max = num
        }
    }
    console.log(`max = ${max}`);
    console.log(`position: ${arr.indexOf(max)}`)
}