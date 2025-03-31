let arr = []
let n = +prompt(`nhập số lượng phần tử trong mảng`)
function check(num,arr){
    let sum = 0
    for (let i = 1; i <= arr.length; i++){
        for (let i = 1; i <= num; i++){
            if (num % i === 0){
                sum += 1
            }
        }
        if(sum === 2 ){
            return true
        }else{
            return false
        }
    }
}
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = +prompt(`nhập vào phần tử index[${i}]`)
    }
    let newArr = arr.filter(num => check(num,arr));
    console.log(newArr.length > 0 ? newArr : "Mảng không có phần tử nào");
}