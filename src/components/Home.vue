<template>
    <div class="intro-container">
        <h2 class="intro smalltext ">Hello, my name is </h2>
        <h1 class="intro bigtext">Blessing N. Musungate.</h1>
        <h1 class="intro bigtext">I'm a Computer Engineer. </h1>
        <p class="intro summarytext">I like to develop various software applications - mobile, desktop and webs apps. </p>
    </div>    
</template>
<script>
export default {
   name: 'Home', 
   data(){
       return{
           name : 'Home'
       }
   }
}
</script>
<style scoped>
.intro-container{
 
    height: 95%;
}
.intro{
    text-align: left;
}
.bigtext{
    font-weight: bold;
    font-size: 50px;
}
.smalltext{
    font-size: 20px;
}
.summarytext{
    font-style: italic;
    font-size: 20px;
}

</style>