function Queue() {
    this.items = [];
    //1.尾部加入队列元素
    Queue.prototype.enqueue = function(element) {
        this.items.push(element)

    };
    //2。删除前端元素
    Queue.prototype.dequeue = function() {
        return this.items.shift()
    };
    //3，查看前端元素
    Queue.prototype.front = function() {
        return this.items[0]
    };
    //4.查看队列是否为空
    Queue.prototype.isEmpty = function() {
        return this.items.length == 0
    };
    //5.查看队列元素的个数
    Queue.prototype.size = function() {
        return this.items.length
    };
    //6.toString方法
    Queue.prototype.toString = function() {
        return this.items.join(' ')
    };
}