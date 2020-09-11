// 字典的构造函数
function Dictionary() {
    // 字典属性
    this.items = {};

    // 1- 向字典添加键值对
    Dictionary.prototype.set = function(key, value) {
        this.items[key] = value
    };
    // 2- 判断字典里是否有某个key
    Dictionary.prototype.has = function(key) {
        return this.items.hasOwnProperty(key)
    };
    // 3- 移除某元素
    Dictionary.prototype.remove = function(key) {
        if (!this.items.has(key)) return false
        delete this.items[key]
        return true
    };
    // 4- 根据key获取value
    Dictionary.prototype.get = function(key) {
        return this.has(key) ? this.items[key] : undefined
    };
    // 5- 获取所有的key
    Dictionary.prototype.keys = function() {
        return Object.keys(this.items)
    };
    // 6- 获取所有的value值
    Dictionary.prototype.values = function() {
        return Object.values(this.items)
    };
    // 7- 获取字典大小size
    Dictionary.prototype.size = function() {
        return this.keys().length
    };
    // 8- clear清空字典
    Dictionary.prototype.clear = function() {
        this.items = {}
    };

}