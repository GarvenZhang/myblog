import { PureComponent, createElement } from 'react'
// import hoc from '../components/TipsBar'

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
