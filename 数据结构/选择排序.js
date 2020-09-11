function selectSort(arr) {
    let temp;
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            count++;
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;

            }
        }
    }
    document.write('简单选择排序执行次数为：' + count);
    return arr;
}