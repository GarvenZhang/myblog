// === XSS: === //
// === 1 攻击原理: 程序 + 数据 = 结果，而通常数据加入了其它网站的脚本，从而使得数据也变成了包含其它网站脚本程序的数据 === //
// === 2 危害: === //
// === 2.1 获取页面数据：偷取网站任意数据 === //
// === 2.2 获取Cookies：获得登录态，从而进行csrf攻击 === //
// === 2.3 劫持前端逻辑：去到钓鱼网站 === //
// === 2.4 发送请求：欺骗用户 === //
// === 3 攻击类型: === //
// === 3.1 反射型: uri参数直接注入, 如经过处理后的url短网址 === //
// === 3.2 存储型: 存储到DB后读取时注入 === //
// === 3.3 DOM-base型: 改版了html原有结构，如转义掉了字符或提前闭合掉了标签，为跨站的脚本代码提供了执行环境 === //
// === 4 攻击注入点: === //
// === 4.1 HTML节点内容：节点动态生成，且包含了用户输入的信息 === //
/*
<div>                        <div>
  {content}       ==》         <script > xxxx </script>
</div>                       </div>
*/
// === 4.2 HTML属性：某个属性值由用户输入组成 === //
/*
<img src={item.src} />   ==》    <img src="1" onerror="alert(1);" />
*/
// === 4.3 Javascript代码：某段js代码包含了由用户注入的信息，如从后端出来的变量 === //
/*
var data = "#{data}"    ==》     var data = "hello";alert(1);"";
*/
// === 4.4 富文本：既要保持格式，且HTML有XSS攻击风险 === //
// === 5 防御 === //
// === 5.1 X-XSS-Protection === //
// === 5.2 实体转义 === //
/*
html环境:
< : '&lt;'
> : '&gt;'

html属性环境:
& : '&amp;'
" : '&quto;'
' : '&#39;'
*/
// === 5.3 js转义: `"`和`\`转义 === //
// === 5.4 富文本过滤:  === //
// === 5.5 CSP === //

/**
 * 转义危险html字符
 * // === 参数传递：形参是实参在栈内存的副本，改变形参则为按值传递，改变形参的属性则为引用传递(若是对象) === //
 * @param {String} str - html字符
 * @return {String}
 */
export function escapeHtml (str) {

  str = str + ''

  if (!str) {
    return ''
  }

  return str
    // html
    .replace(/&/g, '&amp;') // 只能放最前面
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // html property
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * 转义危险js字符
 * @param {String} str - js字符
 * @return {String}
 */
export function escapeJs (str) {

  if (!str) {
    return ''
  }

  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')

};
