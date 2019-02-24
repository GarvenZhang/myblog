export default function () {

  // === 事件循环机制： === //

  // === 1.分为4部分：代码、调用栈、webcore模块、任务队列 === //
  // === 1.1 代码：可执行代码 === //
  // === 1.2 调用栈：js有一个 主进程 和 调用堆栈，对一个调用堆栈中的任务进行处理时，其它的都要等着 === //
  // === 1.3 webcore模块：webkit内核在js执行引擎外，提供了webcore模块，用来对类似DOM，ajax，setTimeout这些api提供底层的如DOM Binding，network，timer模块进行处理 === //
  // === 1.4 任务队列：等webcore模块处理完后将回调放入任务队列，之后等调用栈中的任务执行完后再去执行队列中的任务 === //

  // === 2.以下面为例： === //
  // === 2.1 当i为5时，调用栈 发现 循环体 内是setTimeout，将其出栈后把延时执行的函数交给 timer 模块处理  === //
  // === 2.2 当为 4，3，2，1 时，和 i 为 5 时相同，因此 timer 模块会有5个相同的延时执行函数 === //
  // === 2.3 当为 0 时，不满足循环条件，循环结束，this.setState({title: `${this.state.title}-blur`}) 入调用栈，执行后出栈 === //
  // === 2.4 1s后，timer 模块将 5 个回调按照注册顺序依次返回给任务队列 === //
  // === 2.5 执行引擎去执行 任务队列时，5个函数依次 入调用栈，执行，出栈，此时5个函数访问到的 i 都为 0 === //
  // === 2.6 第一个回调执行后，key变为true，之后的4个回调都无法执行 === //

  var i = 0

  for (let key = false; i--; ) {

    setTimeout(() => {

      if (i === 0 && !key) {

        this.setState({
          title: `想搜索些啥文章呢？`,
          isDetectKeyEvent: false
        })

        key = true
      }

    }, 1000)

  }

  // === 闭包：由执行上下文及执行上下文中的函数组成，是有权访问另一个函数作用域中的函数，也可简便地理解为有数据的函数 === //
  // === 分析如下代码： === //
  // === 1.若没有IIFE，setTimeout中的回调获取到的i是 5 === //
  // === 2.有了IIFE，setTimeout中的回调获取到的是传进去IIFE中的实参 === //
  // === 3.闭包就是：setTimeout代码块与index等IIFE中的数据组成 === //

  // === 函数声明与函数表达式: === //
  // === 1 函数声明: function关键字开头, 后跟着函数标识符名称 === //
  // === 1.1 特点：函数声明提升 === //
  // === 2 函数表达式: === //
  
  // === IIFE: 立即执行的函数表达式, 形成闭包，用来处理模块化可以减少全局变量造成的空间污染，构造跟多私有变量 === //
  // === 1 写法: 将函数声明转化为函数表达式 === //
  /*

  // 最常用的写法
  (function () {}()}
  (function () {})()

  // 其它写法
  var i = function () {}()
  true && function () {}()
  0, function () {}()
  +function () {}()
  -function () {}()
  !function () {}()
  ~function () {}()

  // 可以但不建议
  new function () {}
  new function () {}(参数)

  */
  // === 2 创建module: === //
  /*

  var module = (function () {

    let num = 1

    return {
      get () {
        return num
      },
      set () {
        num = value
      }
    }

  })()

  */

  for (var j = 0; j < 5; ++j) {

    ~function (index) {

      setTimeout(function () {
        i = index
      }, 0)

    }(j)

  }

  // === es6 块级作用域 中的 let 等价于以上用IIFE的方法 === //
  for (let k = 0; k < 5; ++k) {

    setTimeout(function () {
      i = k
    }, 10)

  }

  // === 3.任务源： === //
  // === 3.1 macro-task：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。 === //
  // === 3.2 micro-task: process.nextTick, Promises, Object.observe, MutationObserver === //

  // === 4.执行顺序：=== //
  // === 4.1 事件循环的顺序是从script开始第一次循环，随后全局上下文进入函数调用栈，碰到macro-task就将其交给处理它的模块处理完之后将回调函数放进macro-task的队列之中，碰到micro-task也是将其回调函数放进micro-task的队列之中。 === //
  // === 4.2 直到函数调用栈清空只剩全局执行上下文，然后开始执行所有的micro-task。当所有可执行的micro-task执行完毕之后。=== //
  // === 4.3 循环再次执行macro-task中的一个任务队列，执行完之后再执行所有的micro-task，就这样一直循环。=== //

  // === 5.分析如下代码： === //
  // === 5.1 script任务源先执行，全局上下文入栈 === //
  // === 5.2 script任务源的代码执行之前的。。。。，到这一步为止(这里才是重点) === //
  // === 5.3 script任务源的代码的代码执行到 let key = 0, 入调用栈，执行，出栈 === //
  // === 5.4 script任务源执行到setTimeout时，作为一个macro-task，将其回调放入自己的队列 === //
  // === 5.5 script任务源执行到Promise实例时，Promise中的第一个参数直接执行，入栈执行后，即 key 此时为 1 ，resolve执行，状态变为 Fullfilled 出栈 === //
  // === 5.6 script任务源执行到then，将其作为回调放入 micro-task 队列 === //
  // === 5.7 script任务源执行到 return，此时 macro-task 中的script执行完毕 === //
  // === 5.8 接着先执行 micro-task 队列中的任务，then的回调入栈执行后出栈，key变为 2 === //
  // === 5.9 接着执行 macro-task 队列中的任务，setTimeout的回调入栈执行后出栈，key变为 1，满足条件，执行了setState === //

  let key = 0

  setTimeout(() => {

    --key

    if (key === 1) {
      this.setState({
        title: `${this.state.title}-blur`,
      })
    }

  }, 0)


  new Promise(function (resolve, reject) {

    ++key
    resolve()

  })
    .then(function (resolve, reject) {

      ++key

    })

}
