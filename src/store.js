import {createStore} from "vuex"
const store = createStore({
    state(){
        return {
            count: 100
        }
    },
    mutations:{
        incrementstate(state, param){
            console.log(param)
            state.count++;
        }
    },
    actions:{
        actionStore({commit}, {id}){
            commit("incrementstate", id++)
        }
    }
})
export default store;