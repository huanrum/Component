import Vue from 'vue';

import component from './component';

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
    render: h => h({
        components: component,
        template: [
            '<div>',
                Object.keys(component).map(cm => {
                    return '<div><componentName>componentName</componentName></div>'.replace(/componentName/g, cm);
                }).join(''),
            '</div>'
        ].join('')
    })
}).$mount('#app');