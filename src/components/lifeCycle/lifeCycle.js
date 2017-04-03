/*
* 生命周期:
* 在组件的整整生命周期中，随着该组件的props或者state改变，
* 它的dom表现也会有相应的变化，一个组件就是一个状态机，对于特定的输入，有一致的输出。
* React为每个组件提供了生命周期函数去响应不同的时刻，
* 分为以下三个部分:
* 1.实例化：首次加载js展示给用户最直观的内容，效率的高低直接决定体验的好坏。
*          实例化的过程是对数据进行说明和描述的过程。
*          实例化过程完成了virtualDom和真实的Dom的生成。
*          依次调用：
*          getDefaultProps
           getInitialState：该方法的调用次数有且只有一次。
           componentWillMount
           render
           componentDidMount:已经生成了真实的dom即可以拿到节点。
*
* 2.存在期：交互导致触发一个事件处理器。用户改变state，便会有新的state流入组件结构树
*         依次调用：
*         componentWillReceiveProps
*         shouldComponentUpdate
*         componentWillUpdate
*         render
*         componentDidUpdate
* 3.销毁： componentWillUnmount
* */
import React, {Component} from 'react';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  // static get defaultProps() {
  //   console.log('getDefaultProps');
  // }
  
  componentWillMount() {
    console.log('componentWillMount');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }
  
  componentWillReceiveProps(props, nextProps) {
    console.log('componentWillReceiveProps');
  }
  
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  handleClick() {
    let { loading } = this.state;
    this.setState({
      loading : !loading
    })
  };
  
  
  render() {
    console.log('render');
    let { loading } = this.state;
    return (
      <div>
      <div>
        loading:{loading+''}
      </div>
      <div onClick={this.handleClick}>点我切换loading</div>
    </div>);
  }
}

export default Container;
