# 阻止默认事件对比系列

|   |   功能  |
|:---|:---|
|   preventDefault()    |   阻止默认事件(W3C标准)   |
|   e.returnValue = false   |   阻止默认事件(IE8及以下)中 |
|   returm false    |   等同于`event.preventDefault();` && `event.stopPropagation();`, 但不建议用于阻止默认事件, 有副作用return  |
