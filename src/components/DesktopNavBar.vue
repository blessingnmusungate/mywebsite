      <template>
            <nav class="nav-bar">
              <img id="home-btn" class="nav-element" @click="$router.push('/')" src="../assets/general/homeicon.jpg"/>
              <div id="section">
                <button id="about-btn" class="nav-element" @click="$router.push('/about')">About</button>
                <button class="nav-element" @click="$router.push('/experience')">Experience</button>
                <button class="nav-element" @click="$router.push('/skills')">Skills</button>
                <button class="nav-element" @click="$router.push('/contact')">Contact</button>
                <button class="nav-element" onClick="location.href = '/blessing-resume.pdf'" type="button">Resume</button>
              </div>
          </nav>
      </template>
      <script>
      export default {
          name: 'DesktopNavBar'
      }
      </script>
      <style scoped>
      .nav-div{
        display: block;
        position: relative;
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

      #section{
        margin-left: 30vw;
        display: block;
        background-color: transparent;
      }
      img{
        width: 40px; 
        height: 40px;
      }
      #home-btn{
        float: left;
        margin-left: 5vw;
      }
    </style>