# 阻止冒泡

|   |   功能  |
|:---|:---|
|   stopPropagation() | 阻止冒泡(通用)    |
|   e.cancelBubble = true    |  阻止冒泡(ie8及以下)    |
|   stopImmediatePropagation    |   对于同一类事件, 调用了stopImmediatePropagation()再绑定的事件处理程序会失效, 假如对div先绑定了click事件处理程序，输出1，<br> 并调用了stopImmediatePropagation();再绑定多一个click事件处理程序，输出2。点击时实际上只会输出1 |
