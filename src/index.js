import './static/style/style.less';
import Icon from 'static/images/logo.png';

import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import getRouter from './router/router';
import store from './redux/store';
// import 'babel-ployfill';

window.onload = function () {
  const div = document.createElement('div');
  const img = new Image();
  img.src = Icon;
  div.appendChild(img);
  document.body.appendChild(div);

  () => {
    console.log(1333);
  };
};

const router = getRouter();
/** 初始化 */
renderWithHotReload(router);

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <Provider store={store}>{RootElement}</Provider>,
    document.getElementById('root')
  );
}

// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
  // 实时热更新
  module.hot.accept();
}
