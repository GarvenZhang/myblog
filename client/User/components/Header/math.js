// === 源码/反码/补码: === //
// === 1 机器数: 一个数在计算机中的二进制表示形式,  叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号, 正数为0, 负数为1. === //
// === 1.1 例子: 十进制中的数 +3 ，计算机字长为8位，转换成二进制就是00000011。如果是 -3 ，就是 10000011; 那么，这里的 00000011 和 10000011 就是机器数  === //
// === 2 真值: 因为第一位是符号位，所以机器数的形式值就不等于真正的数值。例如上面的有符号数 10000011，其最高位1代表负，其真正数值是 -3 而不是形式值131（10000011转换成十进制等于131）。所以，为区别起见，将带符号位的机器数对应的真正数值称为机器数的真值 === //
// === 2.1 例子: 0000 0001的真值 = +000 0001 = +1，1000 0001的真值 = –000 0001 = –1 === //
// === 3 原码: 原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值. 比如如果是8位二进制 === //
// === 3.1 例子: === //
/*
[+1]原 = 0000 0001
[-1]原 = 1000 0001
第一位是符号位. 因为第一位是符号位, 所以8位二进制数的取值范围就是: [1111 1111 , 0111 1111] 即[-127 , 127]
原码是人脑最容易理解和计算的表示方式.
*/
// === 4 反码: 正数的反码是其本身, 负数的反码是在其原码的基础上, 符号位不变，其余各个位取反 === //
// === 4.1 例子: === //
/*
[+1] = [00000001]原 = [00000001]反
[-1] = [10000001]原 = [11111110]反
可见如果一个反码表示的是负数, 人脑无法直观的看出来它的数值. 通常要将其转换成原码再计算.
*/
// === 5 补码: 正数的补码就是其本身, 负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1) === //
// === 5.1 例子: === //
/*
[+1] = [00000001]原 = [00000001]反 = [00000001]补
[-1] = [10000001]原 = [11111110]反 = [11111111]补
对于负数, 补码表示方式也是人脑无法直观看出其数值的. 通常也需要转换成原码在计算其数值.
*/

// === 位运算: === //
// === 1 位操作符: === //
// === 1.1 按位非(~): 返回数值的反码 === //
// === 1.2 按位与(&): 按位与操作只在两个数值的对应位都是 1 时才返回 1 === //
// === 1.3 按位或(|): 只有在两个位都是 0 的情况下才返回 0 === //
// === 1.4 按位抑或(^): 对应的两位都是 1 或都是 0，则返回 0 === //
// === 1.5 左移(<<): 将数值的所有位向左移动指定的位数(左移不会影响操作数的符号位), 补零=== //
// === 1.6 有符号的右移(>>): 将数值向右移动，但保留符号位, 补零 === //
// === 1.7 无符号的右移(>>>): 所有位右移，补零 === //

// === 1 质数/素数: 在大于1的自然数中，除了1和它本身以外不再有其他因数 === //
// === 1.1 通过正则: === //
// === > Array(num + 1).join('1'): 将num化为n个1的字符, 如num = 11, 则为 '11111111111' === //
// === > /^(11+?)\1+$/: 先匹配 '11' , 然后看看剩下的9个 '1' 中是否能匹配整数倍个 '11'; 不行, 则先匹配 '111', 然后看看剩下的8个 '1' 中能否匹配整数倍个 '111'; 一次类推到最后都没有, 则此过程执行完了: 除了1和它本身以外不再有其他因数, 其实在 匹配到了长度为一半时若还没成功即可不用匹配, 因为先匹配的长度已经大于后面剩余的长度了 === //
export const judgePrimeByReg = num => num < 2 ? false : !/^(11+?)\1+$/.test(Array(num + 1).join('1'))
// === 1.2 通过非正则: 排除 小于2 及 尾数为 2 和 5 的数, 然后用num除以从2开始的每个数, 若能有余数, 则证明能被整除, 是合数 === //
export const judgePrime = num => {

  // 不计算小于2的数字
  if (num < 2) {
    return false
  }

  // 不计算数字尾数为双数或者5的数字
  if (/^\d*(?:2|5)$/.test(num)) {
    return false
  }

  // 从2开始用num除以每个数, 若余数为零证明能被整除
  for (let i = 2; i < num / 2 + 1; ++i) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// === 2 奇数/偶数: 1, 3, 5, 7, 9 ... / 0, 2, 4, 6, 8, ... === //
// === 2.1 通过位运算: === //
export const isOdd = num => (num & 1) === 1
export const isEven = num => (num & 1) === 0
// === 2.2 通过模运算: num % 2 === 0 === //

// === 3 判断正负: === //
// === 3.1 通过位运算: 无符号右移, 即没有了符号位, 原来的符号位也列入计算中, 那么肯定与原来的不一样, 但正数的符号位是0, 所以列入计算也与原来的一样 === //
export const isPositive = num => num === (num >>> 0)
export const isNegative = num => num !== (num >>> 0)
// === 3.2 通过Math静态方法: Math.abs() === //

// === 4 向下取整: 其实浮点数是不支持位运算的，所以会先把1.1转成整数1再进行位运算，就好像是对浮点数向下求整。所以1|0的结果就是1 === //
// === 4.1 通过位运算: num | 0 或者 num >> 0 === //
export const getInt = num => num | 0
// === 4.2 通过Math.floor() === //
// === 4.3 随机取整: floor: 0 ~ num - 1 ; ceil: 1 ~ num === //
export const getRandom = (num, floorOrCeil) => {
  const random = Math.random()
  return floorOrCeil === 'floor' ? random * num | 0 : random * num | 1
}

// === 5 求幂: === //
// === 5.1 Math.pow() === //
export const getPow = (base, exponent) => Math.pow(base, exponent)
// === 5.2 原始: num * num * num * ... === //
/*
export const getPow = (base, exponent) => {

  let times = exponent
  let ret = 1

  while (times--) {
    ret *= base
  }

  return ret

}
*/
// === 5.3 求以2为底的幂(2的n次方): 1的二进制是01，左移5位就是0100000，十进制就是2的5次方32 === //
export const getPowForBase2 = num => 1 << num
// === 5.4 整数乘/除2的倍数: === //
/*
24 << 2 == 24 * (2 * 2)
32 >> 3 == 32 / (2 * 3)
*/

// === 6 求最值: === //
// === 6.1 Math.min/max([val1 [, val2 ...]]) === //
// === 6.2 循环: 假定第一个数是最大的, 遍历比较, 有更大的则替换 === //
// === 6.2.1 若是数组, 用spread operator也可: Math.max(...[1, 2, 3]) === //
const getMax = arr => {
  
  let max = arr[0]
  let l = arr.length
  
  while (l--) {
    if (arr[l] > max) {
      max = arr[l]
    }
  }
  
  return max
}

// === 7 交换位置: === //
// === 7.1 借用第三方: === //
/*
var num1 = 1, num2 = 2, temp
temp = num1
num1 = num2 // 2
num2 = temp // 1
*/
// === 7.2 不借用第三方: 先把num2存储在数组第一个位置, 然后在第二个位置将num1赋值给num2 === //
export const swap = (arr, num1, num2) => {
  arr[num1] = [arr[num2], arr[num2] = arr[num1]][0]
}
// === 7.3 若为整数: === //
/*
var num1 = 1, num2 = 2
num1 ^= num2 // num1 = num1 ^ num2 = 1 ^ 2 = 3
num2 ^= num1 // num2 = num2 ^ (num1 ^ num2) = 2 ^ (1 ^ 2) = 1
num1 ^= num2 // num1 = num1 ^ num2 = 3 ^ 1 = 2
*/
