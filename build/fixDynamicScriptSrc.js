/**
 * 将动态chunk插入到页面的script的src修复回来
 * // === 思路： === //
 * // === 1 emit事件在源文件的转换和组装完成后出发，此时可以读取到最终将输出的资源、代码块、模块及其依赖，并且可以修改输出资源的内容 === //
 * // === 2 因此想要动态生成script的src就fileChunkname，而输出文件又在cms/之下，则此时只需要改改assets中的key即可，因为输出是根据key来输出的 === //
 */

function FixDynamicScriptSrc () {

}

FixDynamicScriptSrc.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    for (const key in compilation.assets) {
      if (!/(?:account|article-tag|chatroom|comment|general-catalogue|post|works)/.test(key)) {
        continue
      }

      compilation.assets[`cms/${key}`] = compilation.assets[key]

      delete compilation.assets[key]
    }

    callback()
  })
}

module.exports = FixDynamicScriptSrc
