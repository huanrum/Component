import Vue from 'vue';

import component from './component';

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    render: h => h({
        template:`<div>
            <Button>Button</Button>
        
        </div>`
    })
}).$mount('#app')