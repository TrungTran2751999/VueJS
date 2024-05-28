<template>
    <div v-for="data in datas" :key="data.MaDP">
        <div>
            {{ data.MaDP }}
            {{ data.TenDP }}
        </div>
    </div>
    <div>{{ this.$store.state.count }}</div>
</template>
<script>
export default {
    data() {
        return {
            datas: []
        }
    },
    created() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRydW5nZ2ciLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTcxNjc5OTg4MSwiZXhwIjoxNzQ4MzM1ODgxLCJpYXQiOjE3MTY3OTk4ODF9.50qw5up9vwfNifsD_9foWa6bEfcCqrD57IFFHO3zaQ4");
        //myHeaders.append("Content-Type","application/json")
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRydW5nZ2ciLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTcxNjc5OTg4MSwiZXhwIjoxNzQ4MzM1ODgxLCJpYXQiOjE3MTY3OTk4ODF9.50qw5up9vwfNifsD_9foWa6bEfcCqrD57IFFHO3zaQ4"
            }
        };

        fetch(`${process.env.VUE_APP_API_URL}${process.env.VUE_APP_GET_ALL_DUONG_PHO}?hint=e`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                this.datas = result
            })
            .catch((error) => console.error(error));
    }
}
</script>