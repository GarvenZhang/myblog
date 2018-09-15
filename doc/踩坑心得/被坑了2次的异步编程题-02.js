
// TODO: 设计的一个函数， 使其存入一个数组， 在函数内部执行先后执行数组的函数（异步的），并把结果返回
const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

const mergePromise = ajaxArray => {

  const arr = ajaxArray.concat()
  const l = ajaxArray.length

  // 在这里实现你的代码
  return new Promise((resolve, reject) => {

    let i = 0
    const ret = []

    const next = () => {

      let fn = arr.shift()()
      ++i

      fn.then(value => {

        ret.push(value)

        if (i !== l) {
          next()
        } else {
          resolve(ret)
        }

      })

    }

    next()

  })

};


mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data);
});

// 1
// 2
// 3
// done
// [1, 2, 3]