function readline () {
  var str = window.prompt();
  return str;
}

function print (str) {
  if (Object.prototype.toString.call(str) === '[object Null]'
    || Object.prototype.toString.call(str) === '[object Undefined]'
    || Object.prototype.toString.call(str) === '[object Number]') {
    console.log(str);
    return str;
  } else {
    console.log(str.toString());
    return str.toString();
  }
}
