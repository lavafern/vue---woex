import loginPage from "./components/loginPage.vue"
import profilePage from "./components/profilePage.vue"
import HelloWorldVue from "./components/HelloWorld.vue"


export default [
    {path: '/',component:HelloWorldVue},
    {path: '/login',component:loginPage},
    {path: '/profile',component:profilePage}
]