import './static/style/style.less';
import Icon from 'static/images/rea.jpg';
// import 'babel-ployfill';

window.onload = function() {

  let div = document.createElement('div');
  let img = new Image();
  img.src = Icon;
  div.appendChild(img);
  document.body.appendChild(div);
}