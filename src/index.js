import './static/style/style.less';
// import Icon from 'static/images/rea.jpg';
// // import 'babel-ployfill';

// window.onload = function() {

//   let div = document.createElement('div');
//   let img = new Image();
//   img.src = Icon;
//   div.appendChild(img);
//   document.body.appendChild(div);

//   () => {
//     console.log(1333)
//   }
// }

import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(getRouter(), document.getElementById('root'))