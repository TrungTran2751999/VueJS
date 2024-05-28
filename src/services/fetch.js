import {ref, reactive, watch } from 'vue';
    export default function(){
        
            const refTest = ref("")
            const resultAPI = ref([])
            const errorAPI = ref("")
            const reactiveTest = reactive([
                "Java",
                "JS",
                "PHP",
                "C#",
                "Dart"
            ])
            function onChangeRefTest(){
                refTest.value = "dsdsdsds",
                reactiveTest.push("kkk")
            }
            
            watch(refTest, (ov, nv)=>{
                console.log(ov, nv)
            })
            
            //myHeaders.append("Content-Type","application/json")
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRydW5nZ2ciLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTcxNjc5OTg4MSwiZXhwIjoxNzQ4MzM1ODgxLCJpYXQiOjE3MTY3OTk4ODF9.50qw5up9vwfNifsD_9foWa6bEfcCqrD57IFFHO3zaQ4"
                }
            };
            const fetchAll = async ()=>{
                try{
                    const res = await fetch(`${process.env.VUE_APP_API_URL}${process.env.VUE_APP_GET_ALL_DUONG_PHO}?hint=e`, requestOptions)
                    if(!res.ok) throw new Error("ERORRRRR")
                    resultAPI.value = await res.json()
                    console.log(resultAPI)
                }catch(e){
                    errorAPI.value = e
                    console.log("rererer")
                }
            }
            fetchAll()
            return {refTest, reactiveTest, onChangeRefTest, resultAPI, errorAPI, fetchAll}
    }