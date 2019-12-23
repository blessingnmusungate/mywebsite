<template>
    <div id="experience-container">
        <div id="experience-content">
        <h1>My Experience</h1>
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        <ul>
            <li>Computer Program for Marble Block Recovery Ratio Optimization – Java, OPENGL 2019</li>
            <li>Family Medicine Windows Application – C#, UWP 2019</li>
            <li>Ceng-A-War (strategic war game) – Java, Enigma 2016</li>
            <li>Android Clustering Application – Java, Android Studio & Android Debug Bridge, 2018</li>
            <li>Museum Android Application – Java, Android Studio, 2018</li>
            <li>Fruit/vegetable market website – C#, ASP.NET Framework, 2019</li>
            <li>Blockchain – Hyperledger, 2018</li>    
        </ul>
        <h2>Internship</h2>
        <p>Software Development department at Semafor Teknoloji, Balcova, Izmir. I developed several modules in the Family Medicine Windows Application using Model View Presenter (MVP) Architecture.</p>
    </div>    
        <div id="image-wrapper">
            <img src="../assets/experience.jpg" />
        </div>
    </div>
    
</template>
<script>
export default {
   name: 'Experience', 
   data(){
       return{
           name : 'Experience'
       }
   }
}
</script>
<style scoped>
#experience-container{
    text-align: left; 
    font-size: 1.1em;
}
#experience-content{
    width: 70%;
    float: left;
}
#image-wrapper{
    display: inline-block;
}
img{
    padding:1px;
   border:1px solid #021a40;
   width: 300px;
   height: 300px;
}
</style>