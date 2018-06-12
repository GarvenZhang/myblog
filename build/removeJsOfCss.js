/**
 * 将css中的js替换掉
 */

function RemoveJsOfCss () {

}

RemoveJsOfCss.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    const css = compilation.assets['css/style.css']
      .source()
      .replace(/module\.exports.+?;/g, '')

    compilation.assets['css/style.css'] = {

      source: () => {
        return css
      },

      size: () => {
        return css.length
      }
    }

    callback()
  })
}

module.exports = RemoveJsOfCss
