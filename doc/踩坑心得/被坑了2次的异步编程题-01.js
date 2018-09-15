// 异步相关的编程题, 阿里别坑了一次, cvte也被坑了一次, 自己对这类型没有很好的思路, 这次一定要想出多种方法来

// TODO: 实现一个函数todo, 能满足下列输出

function fn1 (cb) {
  setTimeout(() => {
    console.log(1)
    cb()
  }, 450)
}

function fn2 (cb) {
  setTimeout(() => {
    console.log(2)
    cb()
  }, 300)
}

function fn3 (cb) {
  setTimeout(() => {
    console.log(3)
    cb()
  }, 550)
}

function todo (arr, count) {
  // TODO:
}

todo([fn1, fn2, fn3], 2) // 2 1 3

// =================================================================================================== //

function toPromise (fn) {

  return new Promise((resolve, reject) => {

    fn(resolve)

  })

}

/**
 * @param {Array} arr - 数组
 * @param {Number} count - 数字
 */
function todo (arr, count, isOther) {

  isOther = false

  arr.slice(0, count).forEach(item => {

    toPromise(item)
      .then(() => {
        !isOther && todo(arr.slice(count), arr.length - count, isOther = true)
      })

  })

}


