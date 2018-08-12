<style>
body table td {
    word-break: keep-all;
}
</style>

# 跨域知识归纳

|    \       |       jsonp       |       cors        |       xdm     |       window.name         |       document.domain         |           location.hash           |
|:----------|:------------------|:------------------|:--------------|:--------------------------|:------------------------------|:----------------------------------|
|  原理      |  因为通过script标签引入的js是不受同源策略的限制的,<br> 所以我们可以通过script标签引入一个js或者是一个其他后缀形式(如php，jsp等)的文件, 此文件返回一个js函数的调用   |   使用自定义的HTTP头部让浏览器与服务器进行沟通, 从而决定请求或响应是应该成功还是失败  | 向另一个地方(对于 XDM 而言，“另一个地方”指的是包含在当前页面中的<iframe>元素，或者由当前页面弹出的窗口)传递数据    |  在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的  |   把 `http://www.damonare.cn/a.html` 和 `http://damonare.cn/b.html` 这两个页面的 `document.domain` 都设成相同的域名   |   改变URL的hash部分来进行双向通信 |
|  手段   |   script标签    |   AJAX    |   postMessage/onmessage   |   iframe  |   iframe      |   iframe          |
|  兼容性      | 最好    |   不低于IE10     |   基本没问题, ie低版本有瑕疵 |   所有  |   只能把document.domain设置成自身或更高一级的父域，且主域必须相同 |   有些浏览器不支持onhashchange事件，需要轮询来获知URL的改变  |
|  页面间通讯  | 否     |     否   |   可以  |   可以  |   可以  |   可以  |
|  http请求类型   | 只支持GET请求  |   所有    |   不支持     |   不支持 |   不支持 |
|  数据限制    |    无       |   无       |       无   |   字符串     |   字符串     |   字符串, 大小受url长度限制     |
|  错误信息   |    在数据中返回   |   status/readyState/放在数据中  |  e.origin |   在数据中返回 |   在数据中返回
|  安全性     |    不适合放敏感数据    |   适合      |   适合      |   不适合     |   不适合     |       不适合     |
|  其它负面影响   |   无   |   无   |   无   |   无   |   无   |   造成不必要的历史记录   |
