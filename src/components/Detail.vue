<template>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ count }}</h1>
    <h1>value</h1>
    <button @click="onChangeAction">dsdsdsds</button>
</template>
<script>
import { computed } from "vue";
import {useStore} from "vuex";
import { useRoute } from "vue-router"
    export default{
        setup(){
            const store = useStore();
            const route = useRoute();
            const routeParam = route.params.id;
            const count = computed(()=>store.state.count)
            function onChangeAction(){
                store.dispatch("actionStore", {id: routeParam})
            }
            return {count, onChangeAction}
        }
    }
</script>