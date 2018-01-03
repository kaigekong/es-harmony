import './index.css';

window.onload = () => {
  // 变量定义
  const _args = document.getElementById('args');
  _args.onclick = () => {
    import(/* webpackChunkName: "args" */ './js/arguments').then((module) => {
      module.default();
    }).catch(error => 'An error occurred while loading the component');
  };

  // 箭头函数
  const _arrow = document.getElementById('arrow');
  _arrow.onclick = () => {
    import(/* webpackChunkName: "arrow" */ './js/arrow_function').then((module) => {
      module.default();
    }).catch(error => 'An error occurred while loading the component');
  };

  // 表达式解构
  const _destruct = document.getElementById('destruct');
  _destruct.onclick = () => {
    import(/* webpackChunkName: 'destruct' */ './js/destructuring').then((module) => {
      module.default();
    }).catch(error => 'An error occurred while loading the component');
  }

  // 对象字面量扩展语法
  const _enhanced = document.getElementById('enhanced');
  _enhanced.onclick = () => {
    import(/* webpackChunkName: "enhanced" */ './js/enhanced_object_literals').then((module) => {
      module.default();
    }).catch(error => 'An error occurred while loading the component');
  }

  // 函数参数表达、传参
  const _variable = document.getElementById('variable');

  _variable.onclick = () => {
    ; (async () => {
      const module = await import(/* webpackChunkName: 'variable' */ './js/variable');
      module.default();
      return 'module';
    })().then(str => console.log(str));
  }
};