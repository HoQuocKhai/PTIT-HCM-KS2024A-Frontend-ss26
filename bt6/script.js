let arr = []
let n = +prompt(`nhập số lượng phần tử trong mảng`)
function convert(dates) {
    return dates.map(date => {
        let [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}
if (n <= 0 || isNaN(n)){
    console.log(`Mảng không có phần tử nào`)
}else{
    for (let i = 0; i < n; i++){
        arr[i] = prompt(`nhập vào phần tử index[${i}]`)
    }
    console.log(convert(arr))
}