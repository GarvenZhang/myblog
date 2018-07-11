import jsonp from '../User/fetch/jsonp'
import { api } from '../User/fetch/axios'

function keydownHandle (e, data) {
  const target = e.target
  const value = target.value

  if (
    (target.tagName.toLowerCase() === 'input' && target.type === 'text') ||
    target.tagName.toLowerCase() === 'textarea'
  ) {
    const SIMP = data.SIMP
    const TRAD = data.TRAD
    let ret = ''

    for (var i = 0; i < value.length; ++i) {
      ret += (SIMP.indexOf(value[i]) > -1 ? TRAD.charAt(SIMP.indexOf(value[i])) : value[i])
    }

    target.value = ret
  }
}

export default function (isOpen) {
  if (!isOpen) {
    window.jp = null
    return
  }

  window.jp = {

    getDictionary: function (data) {
      document.addEventListener('input', function (e) {
        keydownHandle(e, data)
      }, false)
    }

  }

  jsonp.get(api.getDictionary(), 'dictionary')
  jsonp.delete('dictionary')
}
