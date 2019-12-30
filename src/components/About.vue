<template>
    <div id="about-container" class="animated bounceInLeft">
        <div id="about-content">
            <h1>My Short History</h1>
            <div>
                <ul>
                    <li>Born in Harare, Zimbabwe</li>
                    <li>Moved to Turkey in 2014 for university studies</li>
                    <li>Attained a C1 Level certificate in Turkish Language in 2015</li>
                    <li>Graduated from Dokuz Eylul University in Izmir,Turkey <br/> with a BSc in Computer Engineering in 2019</li>
                    <li>Graduated as one of the top three students in the Engineering Faculty</li>
                </ul>
            </div>
           
        </div>
        <div id="image-wrapper">
            <img src="../assets/general/aboutme.jpg" width="350px" height="350px"/>
        </div>
        
    </div>    
</template>
<script>
export default {
   name: 'About'
}
</script>
<style scoped>
#about-container{
    height: 95%;
}
#about-content{
    text-align: left;
    font-size: 1.3em;
    float: left;
}
#image-wrapper{
    display: inline-block;
}
img{
   padding:1px;
   border:1px solid #021a40;
}
</style>