import { PureComponent, createElement } from 'react'
// import hoc from '../components/TipsBar'

// === 高阶组件: 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件 === //
// === 1 注意: === //
// === 1.1 不要再render函数中使用高阶组件 === //
// === 1.2 必须将静态方法做拷贝 === //
// === 1.3 Refs属性不能传递 === //

// === 缺点：css中会混有js代码，还未搞懂原因 === //
export default function getAsyncComponent (load) {
  return class AsyncComponent extends PureComponent {
    componentDidMount () {
      load().then(
        ({
           default: component
         }) => {
          this.setState({
            component
          })
        }
      )
    }

    render () {
      const { component } = this.state || {}
      return component ? createElement(component) : null
    }
  }
}
