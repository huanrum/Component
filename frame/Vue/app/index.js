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
                    return '<div><componentName v-model="entity.componentName" @change="change(\'componentName\',arguments[0])">componentName</componentName></div>'.replace(/componentName/g, cm);
                }).join(''),
            '</div>'
        ].join(''),
        data(){
            var entity = {};
            Object.keys(component).forEach(i=>entity[i]=i);
            return {
                entity:entity
            };
        },
        methods:{
            change(field,value){
                console.log(field,value);
            }
        }
    })
}).$mount('#app');