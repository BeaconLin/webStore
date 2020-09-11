// 插入法从小到大排序数组
let numArr = [59, 23, 65, 34, 78, 112, 4, 35, 0, 57, 78]

function insertSort(arr) {
    let result = []
    result.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        for (let j = result.length - 1; j >= 0; j--) {
            if (arr[i] > result[j]) {
                result.splice(j + 1, 0, arr[i])
                break
            }
            if (j === 0) {
                result.unshift(arr[i])
            }
        }
    }
    return result





    // let result = []
    // result.push(arr[0])
    // for(let i=1;i<arr.length;i++){
    //     for(let j=result.length-1;j>=0;j--){
    //         //情况1 新数大于result的最后一项，直接追加在后面
    //         if(arr[i]>result[j]){
    //             result.splice(j+1,0,arr[i])
    //             break
    //         }
    //         //情况2 新数大于result的第一项，放在前面
    //         if(j===0){
    //             result.unshift(arr[i])
    //         }
    //         // 情况3 比j小，则与j--比较 不用做任何操作
    //     }
    // }
    // return result
}
console.log(insertSort(numArr))