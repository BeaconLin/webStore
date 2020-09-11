// 插入法从小到大排序数组
let numArr = [59, 23, 65, 34, 78, 112, 4, 35, 0, 57, 78]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let midIndex = Math.floor(arr.length / 2)
    let midItem = arr.splice(midIndex, 1)[0]
    let arrLeft = []
    let arrRight = []
    arr.forEach(item => {
        item > midItem ? arrRight.push(item) : arrLeft.push(item)
    })
    return quickSort(arrLeft).concat(midItem, quickSort(arrRight))
}
console.log(quickSort(numArr))

// function quickSort(arr) {
//     //4 递归结束条件
//     if (arr.length <= 1) {
//         return arr
//     }
//     // 1 找到数组中间项并删除
//     let midIndex = Math.floor(arr.length / 2)
//     let midValue = arr.splice(midIndex, 1)[0] //被删除的当前项
//         //2 准备左右两个数组 循环剩下的每一项，比当前项小的放左边，反之放右边
//     let arrLeft = []
//     let arrRight = []
//     arr.forEach(item => {
//             item < midValue ? arrLeft.push(item) : arrRight.push(item)
//         })
//         //3递归 最终数组拼接
//     return quickSort(arrLeft).concat(midValue, quickSort(arrRight))
// }

// console.log(quickSort(numArr))