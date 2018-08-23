// === 高阶组件: 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件 === //
// === 1 公式: hocFactory:: W: React.Component => E: React.Component === //
// === 2 功能: === //
// === 2.1 代码复用，逻辑抽象，抽离底层准备（bootstrap）代码 === //
// === 2.2 渲染劫持 === //
// === 2.3 State 抽象和更改 === //
// === 2.4 Props 更改 === //
// === 3 实现方式: === //
// === 3.1 属性代理: 把 高阶组件PP 收到的 props 传递给被包裹组件 === //

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

// === 3.1.1 功能: === //

// === > 更改 props: 可以读取，添加，修改，删除 将要传递给 WrappedComponent 的 props, 该给高阶组件的 props 指定命名空间，以防破坏从外传递给 WrappedComponent 的 props === //
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      const newProps = {
        user: currentLoggedInUser
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}

// === > 通过 refs 获取组件实例: 可以通过 ref 获取关键词 this(WrappedComponent 的实例) , 但是想要它生效，必须先经历一次正常的渲染过程来让 ref 得到计算 === //
function refsHOC(WrappedComponent) {
  return class RefsHOC extends React.Component {
    proc(wrappedComponentInstance) {
      wrappedComponentInstance.method()
    }
    render() {
      const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
      return <WrappedComponent {...props}/>
    }
  }
}

// === > 抽象 state: 可以通过向 WrappedComponent 传递 props 和 callbacks（回调函数）来抽象 state === //
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }
      this.onNameChange = this.onNameChange.bind(this)
    }
    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}
// 这里的 input 自动成为一个受控的 input
@ppHOC
class Example extends React.Component {
  render() {
    return <input name="name" {...this.props.name}/>
  }
}

// === > 把 WrappedComponent 与其它 elements 包装在一起: 出于操作样式、布局或其它目的，你可以将 WrappedComponent 与其它组件包装在一起 === //
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return (
        <div style={{display: 'block'}}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

// === 3.2 反向继承: 返回的 高阶组件类 继承了 包裹组件 === //

// 返回的高阶组件类（Enhancer）继承了 WrappedComponent
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
}

// === 3.2.1 特点: 反向继承允许高阶组件通过 this 关键词获取 WrappedComponent，意味着它可以获取到 state，props，组件生命周期（component lifecycle）钩子，以及渲染方法（render） === //

// === 3.2.1 功能: === //
// === > 渲染劫持: 高阶组件控制了 WrappedComponent 生成的渲染结果，并且可以做各种操作 === //

// 条件性渲染:
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      if (this.props.loggedIn) {
        return super.render()
      } else {
        return null
      }
    }
  }
}

// 通过 render 来变成 React Elements tree 的结果:
// 如果 WrappedComponent 的顶层元素是一个 input，则改变它的值为 “may the force be with you”
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render()
      let newProps = {};
      if (elementsTree && elementsTree.type === 'input') {
        newProps = {value: 'may the force be with you'}
      }
      const props = Object.assign({}, elementsTree.props, newProps)
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)
      return newElementsTree
    }
  }
}

// === > 操作 state: 通常不建议使用高阶组件来读取或添加 state，添加 state 需要使用命名空间来防止与 WrappedComponent 的 state 冲突 === //

// 通过显示 WrappedComponent 的 props 和 state 来 debug
export function IIHOCDEBUGGER(WrappedComponent) {
  return class II extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      )
    }
  }
}

// === 4 注意: === //
// === 4.0 注意高阶组件不会修改子组件，也不拷贝子组件的行为。高阶组件只是通过组合的方式将子组件包装在容器组件中，是一个无副作用的纯函数 === //
// === 4.1 不要再render函数中使用高阶组件: 不要在组件的render方法中使用高阶组件，尽量也不要在组件的其他生命周期方法中使用高阶组件, 最适合使用的地方是在组件定义的外部，这样就不会受到组件生命周期的影响了 === //
// === 4.2 必须将静态方法做拷贝: 如果需要使用被包装组件的静态方法，那么必须手动拷贝这些静态方法 === //
const withHeader = title => WrappedComponent => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return (
        <div>
          <h1 className='demo-header'>{title}</h1>
          <WrappedComponent>
            { this.props.children }
          </WrappedComponent>
        </div>
      )
    }
  }
  return HOC
}

class Demo extends Component {
  static hello() {
    console.log('22')
  }
  render() {
    return (
      <div style={this.props}>
        { this.props.children }
      </div>
    )
  }
}

const WithHeaderDemo = withHeader('标题')(Demo)
WithHeaderDemo.hello() //error

// 解决办法:
// 手动复制WrappedComponent的static方法到高阶组件上
const withHeader = title => WrappedComponent => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return (
        <div>
          <h1 className='demo-header'>{title}</h1>
          <WrappedComponent>
            { this.props.children }
          </WrappedComponent>
        </div>
      )
    }
  }

  // 手动逐一拷贝
  HOC.getDisplayName = WrappedComponent.getDisplayName;
  //...

  return HOC
}

// 使用hoistNonReactStatic
import hoistNonReactStatic from 'hoist-non-react-statics'

const withHeader = title => WrappedComponent => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return (
        <div>
          <h1 className='demo-header'>{title}</h1>
          <WrappedComponent>
            { this.props.children }
          </WrappedComponent>
        </div>
      )
    }
  }
  hoistNonReactStatic(HOC, WrappedComponent)
  return HOC
}


// === 4.3 Refs属性不能传递: 高阶组件可以把所有属性传递给被包裹组件，但是ref除外，因为ref根本不属于React组件的属性，React 对它进行了特殊处理，如果你向一个由高阶组件创建的组件的元素添加ref应用，那么ref指向的是最外层容器组件实例的 === //
// 解决办法: 换个名字如 _ref
const withHeader = title => WrappedComponent => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return (
        <div>
          <h1 className='demo-header'>{title}</h1>
          <WrappedComponent ref={this.props._ref}>
            { this.props.children }
          </WrappedComponent>
        </div>
      )
    }
  }
  hoistNonReactStatic(HOC, WrappedComponent)
  return HOC
}

class App extends Component {
  render() {
    const WrappedComponentRef = React.createRef()
    this.WrappedComponentRef = WrappedComponentRef
    return (
      <Fragment>
        <WithHeaderDemo color='blue' _ref={WrappedComponentRef}>
          33333
        </WithHeaderDemo>
      </Fragment>
    )
  }
  componentDidMount() {
    console.log(this.WrappedComponentRef.current)
  }
}

withHeader('app')(App)

// === 4.4 命名: 当通过高阶组件来包装一个组件时，你会丢失原先 WrappedComponent 的名字，可能会给开发和 debug 造成影响 === //
// 解决方法: 在原先的 WrappedComponent 的名字前面添加一个前缀

HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`
//or
class HOC extends ... {
  static displayName = `HOC(${getDisplayName(WrappedComponent)})`
...
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName ||
    WrappedComponent.name ||
         'Component'
}
