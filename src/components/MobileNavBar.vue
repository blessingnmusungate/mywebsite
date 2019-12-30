    <template>
    <div >
            <div class="mobile-top">
            <img id="mobilehomeimg" class="top" alt="home" src="../assets/general/homeicon.jpg" @click="route(0)" />
            <img id="moreimg" class="top show" alt="more" src="../assets/general/more.png" @click="toggleNavBar(true)"  />
            <img id="closeimg" class="top hidden" alt="close" src="../assets/general/closeicon.jpg" @click="toggleNavBar(false)" />
            </div>
            
            <nav class="animated bounceInDown faster mobilenav-bar hidden">
                <button class="nav-element" @click="route(1)">About</button>
                <button class="nav-element" @click="route(2)">Experience</button>
                <button class="nav-element" @click="route(3)">Skills</button>
                <button class="nav-element" @click="route(4)">Contact</button>
                <button class="nav-element" @click="route(5)" type="button">Resume</button>
            </nav>
    </div>
    </template>
    <script>
    export default {
    name: 'MobileNavBar',
    created(){
        window.addEventListener("resize", this.resetViewState)
    },
    destroyed(){
        window.removeEventListener("resize", this.resetViewState)
    },
    methods:{
        resetViewState(){
             if(window.innerWidth > 768){
                  this.toggleNavBar(false); 
                  this.$emit('toggle-nav', false);
             }
                 
        },
        route(key){
            this.toggleNavBar(false);
              switch(key){
                case 0:
                  this.$router.push('/');
                  break;
                case 1:
                  this.$router.push('/about');
                  break;
                case 2:
                  this.$router.push('/experience');
                  break;
                case 3:
                  this.$router.push('/skills');
                  break;
                case 4:
                  this.$router.push('/contact');
                  break;
                case 5:
                  window.location.href = '/blessing-resume.pdf';
                  break;
              }
            },
        toggleNavBar(flag){//if true show nav else hide it
        var navBar = document.querySelector('.mobilenav-bar');
        var moreImg = document.querySelector('#moreimg');
        var closeImg = document.querySelector('#closeimg');
            if(flag){
                navBar.classList.add('show');
                navBar.classList.remove('hidden');
                closeImg.classList.add('show');
                closeImg.classList.remove('hidden');
                moreImg.classList.add('hidden');
                moreImg.classList.remove('show');
                this.$emit('toggle-nav', true);
            }
            else{
                navBar.classList.add('hidden');
                navBar.classList.remove('show');
                closeImg.classList.add('hidden');
                closeImg.classList.remove('show');
                moreImg.classList.add('show');
                moreImg.classList.remove('hidden');
                this.$emit('toggle-nav', false);
            }
        },

    }

    }
    </script>
    <style scoped>
    #mobilehomeimg{
        width: auto;
        display: inline-block;   
        position: relative;
        margin-right: 70%;
    }
    #moreimg, #closeimg{
        float: right;
    }
    .mobilenav-bar{
        box-shadow: 1px 1px 1px 1px;
        border: 1px solid gray;
        background-color: #f1f1f1;
        margin: 5vw;
        padding: 2vw;
    }
    
    img{
        width: 30px; 
        height: 30px;
    }
    .show{
        display: block;
    }
    .nav-element { 
        background-color: rgb(208, 234, 243);
        width: 40%;
        height: 40px;
        display: block;
        margin: auto;
        margin-top: 2px;
    } 
    .nav-element:hover, .top:hover{
        background-color: rgb(123, 185, 206);
        border: 1px grey solid;
        transform: scale(1.2,1.2);
    }
    .hidden{
        display : none;
    }
    </style>