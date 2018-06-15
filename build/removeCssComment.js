/**
 * 去掉css中的注释
 * // === 官网是推荐css-loader中options设置minimize但是不行！ === //
 */

function emoveCssComment () {

}

emoveCssComment.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {

    for (const key in compilation.assets) {

      if (key.indexOf('.css') === -1) {
        continue
      }

      // === 正则注意事项： === //
      // === . = [^\r\n]: 不会匹配换行符和回车符 === //
      const css = compilation.assets[key]
        .source()
        .replace(/\/\*(?:.|\r|\n)+?\*\//g, '')

      compilation.assets[key] = {
        source: () => {
          return css
        },

        size: () => {
          return css.length
        }
      }

    }

    callback()
  })
}

module.exports = emoveCssComment
