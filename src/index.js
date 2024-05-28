import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NotFound from "./components/NotFound.vue";
import Detail from "./components/Detail.vue";
import CallApi from "./components/CallApi.vue";
import CompositionAPI from "./components/CompositionAPI.vue"

const checkBefore = (to, from ,next)=>{
    next("/call-api")
}
const routes = [
    {
        path: "/",
        name:"home-route",
        component: Home
    },
    {
        path:"/about",
        name:"helloworld-route",
        component: HelloWorld,
        beforeEnter: checkBefore
    },
    {
        path:"/detail/:id",
        name: "detail-route",
        component: Detail
    },
    {
        path:"/call-api",
        name: "call-api",
        component: CallApi
    },
    {
        path: "/composition-api",
        name: "composition-api",
        component: CompositionAPI
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router