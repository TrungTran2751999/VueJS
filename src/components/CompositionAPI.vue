<template>
    <h1>{{ refTest }}</h1>
    <div>
        <ul>
            <li v-for="(e, index) in reactiveTest" :key="index">
                {{ e }}
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li v-for="(result, index) in resultAPI" :key="index">
                {{ result.TenDP }}
                {{ result.MaDP }}
            </li>
        </ul>
    </div>
    <div>{{ errorAPI }}</div>
    <input id="ggg" v-model="refTest"/>
    <button @click="onChangeRefTest">BUTTON change refTest</button>
</template>
<script>
    import useFetch from "../services/fetch"
    export default{
        setup(){
            const {resultAPI, errorAPI, fetchAll} = useFetch();
            fetchAll()
            return{resultAPI, errorAPI}
        }
    }
</script>