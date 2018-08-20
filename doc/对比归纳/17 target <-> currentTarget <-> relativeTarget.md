# target对比归纳

|   |   target  |   currentTarget   |   relatedTarget   |
|:---|:---|:---|:---|
|   含义  |   触发事件的对象 |   绑定事件的对象 |   只对MounseEvents中的几种事件有效, 常见的是: <br> mouseover: 鼠标指针移到目标节点上时所离开的那个节点 <br> mouseout: 属性是离开目标时，鼠标指针进入的节点    |
|   使用场景    |       | 若想要获取的目标元素有子元素, 最好对目标元素进行事件绑定并通过 currentTarget 获取 |   |
|   区别  |   如有嵌套的div，对父级div绑定click事件，当点击子div时，currentTarget为父div，target为子div    |   |   |
