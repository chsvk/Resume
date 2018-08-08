<template>
     <div class="home">
        <h3>Hello</h3>
        <h4>I'm A</h4>
        <h3><vue-typer :text = '["WEB", "ANDROID", "IOT"]'></vue-typer></h3> 
        <h4>Developer</h4>
     </div>
</template>

<script>
import vuetyper from 'vue-typer'
export default{
    name: 'home',
    components: {
        vuetyper,
    },
    data(){
        return{
            typeEffect: ['WEB', 'ANDROID', 'IOT']
        }
    },
    mounted() {
        // this.type();
        },
    
}
</script>

<style scoped>

.home{
    text-align: center;
    width: 95%;
    height: 95%;
    margin: 2em;
    background: white;
}

.home h3{
    font-size: 7em;
}

.home h4{
    font-size: 4em;
}

</style>
