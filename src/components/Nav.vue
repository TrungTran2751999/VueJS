<template>
    <nav class="nav">
        <router-link :to="{name:'home-route'}">Home</router-link>
        <router-link :to="{name:'helloworld-route'}">About</router-link>
        <router-link :to="{name:'call-api'}">Call-API</router-link>
        <router-link :to="{name:'detail-route', params:{id: 1}}">Detail-API</router-link>
        <router-link :to="{name:'composition-api'}">Composition-API</router-link>
    </nav>
</template>