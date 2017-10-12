var ScrollProgress = require('scroll-progress');    //此处要先npm安装scroll-progress包
import './index.css';

window.onload = function() {
    var container = document.querySelector('.container');
    var scrollProgress = new ScrollProgress(container, {
        height: '5',
        delay: '500',
        color: 'orange',
        top: true
    });
    scrollProgress.init();
}