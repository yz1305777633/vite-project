import { createApp } from 'vue'
//导入全局css
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router/auto'
import pinia from "./pinia"

// 自动导入路由
const router = createRouter({
    history: createWebHistory()
})

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

window.addEventListener("online", () => {
    console.log('在线')
})

window.addEventListener('offline', () => {
    console.log("离线")
})
if (navigator.onLine) {
    console.log('当前网络已连接');
} else {
    console.log('当前网络已断开');
}
