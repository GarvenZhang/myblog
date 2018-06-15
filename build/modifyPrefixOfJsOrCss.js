/**
 * 修改html中的css和js路径
 * html-webpack-plugin提供了钩子：https://github.com/jantimon/html-webpack-plugin
 */

function ModifyPrefixOfJsOrCssPlugin () {

}

ModifyPrefixOfJsOrCssPlugin.prototype.apply = function (compiler) {

  compiler.hooks.compilation.tap('ModifyPrefixOfJsOrCss', (compilation) => {

    compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
      'ModifyPrefixOfJsOrCss',
      (data, cb) => {
        
        data.html = data.html
          .replace(/\/cms\//g, '/')
          .replace(/\/index\//g, '/')

        cb(null, data)
      }
    )
  })

}

module.exports = ModifyPrefixOfJsOrCssPlugin
