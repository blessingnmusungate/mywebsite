<template>
    <div id="contact-container" class="animated bounceInUp faster">
        <h1>Let's get in touch</h1>
        <p>I'm currently available for freelance projects. If you have a project you would like me to look at or have any questions about my work, feel to contact me via any one of the options listed below.</p>
        <a :href="email"><img :src="emailsrc" alt="Email"/></a><br/>
        <a :href="linkedin"><img :src="linsrc" alt="LinkedIn"/></a>
    </div>    
</template>
<script>
export default {
   name: 'Contact', 
   data(){
       return{
           email : 'mailto:bnmusungate@gmail.com',
           emailsrc:  require(`../assets/icons/contact/email.png`),
           linkedin: 'https://linkedin.com/in/bnmusungate',
           linsrc: require(`../assets/icons/contact/linkedin-plain-wordmark.svg`)
       }
   }
}
</script>
<style scoped>
#contact-container{
    font-size: 1.3em;
    width: 60%;
    margin: auto;
    margin-top: 5vw;
}

img{
    height: 80px;
    width: 120px;
    border: 0;
}
</style>