function binarySearch(arr, num) {
    let left = 0
    let right = arr.length - 1
    let find
    while (left <= right) {
        find = Math.floor((left + right) / 2)
        if (arr[find] === num) return find
        else if (arr[find] > num) {
            right = find - 1
        } else {
            left = find + 1
        }
    }
    return -1
}
//对从小到大的数组array进行二分查找
let array = [1, 1, 3, 4, 5, 5, 6, 6, 6, 7, 9]
console.log(binarySearch(array, 6))