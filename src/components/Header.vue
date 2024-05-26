<template>
    <h1 v-if="isShow">This is the header</h1>
    <button @click="onClicked">HEHE123</button>
    <div style="color: red;">
        <slot name="slot1"></slot>
        <slot></slot>
    </div>
    <slot name="slot2"></slot>
</template>
<script>
    export default{
        name:"Header",
        data(){
            return{
                isShow :true
            }
        },
        methods:{
            onClicked(){
                this.isShow = !this.isShow
                this.$emit("cancel")
            }
        },
    }
</script>
<style src="../assets/header.css" lang="css" scoped/>