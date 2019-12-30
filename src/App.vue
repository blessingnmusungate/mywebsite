<template>
  <div id="app" >
    <div id="app-mobilenav-div" class="appblock nav-wrapper">
      <MobileNavBar v-on:toggle-nav="toggleNav" />
    </div>
    <div id="app-desktopnav-div" class="appblock nav-wrapper">
      <DesktopNavBar/>
    </div>
    <div id="app-contents-div" class="appblock contents">
       <router-view/>
    </div>
    <div id="app-footer-div" class="appblock">
      <footer>&copy; 2019 Blessing N. Musungate</footer>
    </div>
  </div>
</template>

<script>
import DesktopNavBar from './components/DesktopNavBar.vue'
import MobileNavBar from './components/MobileNavBar.vue'

export default {
  name: 'app',
  components: {
    DesktopNavBar,
    MobileNavBar
  },
  methods:{
    toggleNav(flag){
      var contents = document.querySelector('#app-contents-div');
      if(flag){ 
          contents.style.display = "none";
      }
      else{
          contents.style.display = "block";
      }
    }
  }
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 /* text-shadow:
		-1px -1px 0 rgb(116, 112, 112); /* #2c3e50*/
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
}

.over{
  z-index: 5;
}
.nav-wrapper{
  /*height: 10%;*/
  /*padding: 5px;*/
 
}
.appblock{
  display: block;
}
.contents{
  /**height: 86vh;*/
  margin-left: 5vw;
  margin-top: 2vw;
  padding-bottom: 2.5rem;
}

button{
  font-family: inherit;
  color: inherit;
  font-size: 1em;
  border-radius: 5px;
}

footer{
  font: Arial, Helvetica, sans-serif, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 1em;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  
}
#app-desktopnav-div{
      display: block;
}
#app-mobilenav-div{
      display: none;
}

 @media only screen and (max-width: 768px) {
   #app-desktopnav-div{
      display: none;
   }
   #app-mobilenav-div{
      display: block;
   }
 }
</style>
