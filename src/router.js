import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NotFound from "./components/NotFound.vue";
import Detail from "./components/Detail.vue"
const routes = [
    {
        path: "/",
        name:"home-route",
        component: Home
    },
    {
        path:"/about",
        name:"helloworld-route",
        component: HelloWorld
    },
    {
        path:"/detail/:id",
        component: Detail
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