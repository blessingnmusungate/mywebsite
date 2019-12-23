<template>
  <div id="app">
    <div class="nav-wrapper">
      <NavBar></NavBar>
    </div>
    <div class="contents">
       <router-view/>
    </div>
    <div>
      <footer>&copy; 2019 Blessing N. Musungate</footer>
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 95vh;
}
.nav-wrapper{
  height: 10%;
  /*padding: 5px;*/
  
}
.contents{
  height: 86%;
  margin-top: 2vh;
  margin-left: 5vw;
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

}
</style>
