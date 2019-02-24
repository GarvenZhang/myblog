const EventEmitter = require('events')

// 缓存事件
class CacheEvent extends EventEmitter {}
const cacheEvent = new CacheEvent()

exports.cacheEvent = cacheEvent
