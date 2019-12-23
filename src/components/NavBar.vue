      <template>
   <!-- <nav><router-link class="spacing" v-for="routes in links" v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link></nav>
            <button id="home-btn" class="nav-element" @click="$router.push('/')"><img src="../assets/home.png" height="20px" width="20px"/></button> -->
        <nav class="nav-bar">
          <button id="home-btn" class="nav-element" @click="$router.push('/')"><img src="../assets/home.png" width="20px" height="20px"/></button>
          <button id="about-btn" class="nav-element" @click="$router.push('/about')">About</button>
          <button class="nav-element" @click="$router.push('/experience')">Experience</button>
          <button class="nav-element" @click="$router.push('/skills')">Skills</button>
          <button class="nav-element" @click="$router.push('/contact')">Contact</button>
          <button class="nav-element" onclick="location.href='/blessing-resume.pdf'" type="button">Resume</button>
        </nav>
      </template>
      <script>
      export default {
          name: 'NavBar',
          data() { 
            return { 
            
              links: [ 
                { 
                  id: 0,
                  text: 'Home', 
                  page: '/' 
                },
              {
                id: 1,
                text: 'About',
                page:'/About'
              },
              {
                id: 2,
                text: 'Experience',
                page:'/Experience'
              },
              {
                id: 3,
                text: 'Skills',
                page:'/Skills'
              },
              {
                id: 4,
                text: 'Contact',
                page:'/Contact'
              } 
              ] 
            } 
          }

      }
      </script>
      <style scoped>
      .nav-bar{
        padding: 10px;

      }
      .nav-element { 
          Margin-right: 1vw;
          height: 40px;
          background-color: rgb(208, 234, 243);
        } 
      .nav-element:hover{
        background-color: rgb(123, 185, 206);
        border: 1px grey solid;
        transform: scale(1.2,1.2);
      }
      #about-btn{
        margin-left: 30vw;
      }
      #home-btn{
        float: left;
      }
      
      </style>