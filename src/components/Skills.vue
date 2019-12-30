    <template>
        <div id="skills-container">
            <h1>My Skills</h1>
            <div class="container-row">
                <h3>Programming Languages</h3>
                <div class="skills-content animated zoomIn">
                    <div class="img-container" v-for="image in pl" v-bind:key="image.id">
                        <img :src="image.src" :alt="image.text"/>
                        <label>{{image.text}}</label>
                    </div>
                </div>
            </div>
            <div class="container-row">
                <h3>Web</h3>
                <div class="skills-content animated zoomIn">
                    <div class="img-container" v-for="image in web" v-bind:key="image.id">
                        <img :src="image.src" :alt="image.text"/>
                        <label>{{image.text}}</label>
                    </div>
                </div>
            </div>
            
          
            <div class="container-row">
                <h3>Frameworks</h3>
                <div class="skills-content animated zoomIn">
                    <div class="img-container" v-for="image in frameworks" v-bind:key="image.id">
                        <img :src="image.src" :alt="image.text"/>
                        <label>{{image.text}}</label>
                    </div>
                </div>
            </div>
        </div>    
    </template>
    <script>
    export default {
    name: 'Skills', 
    data(){
        return{
            pl:[
                {
                    id: 0,
                    src: require(`../assets/icons/pl/java-plain.svg`),
                    text:'Java'
                },
                {
                    id: 1,
                    src: require(`../assets/icons/pl/csharp-plain.svg`),
                    text:'C#'
                },
                {
                   id: 2,
                   src: require(`../assets/icons/pl/c-plain.svg`),
                   text:"C"
                },
                {
                    id: 3,
                    src: require(`../assets/icons/pl/python-plain.svg`),
                    text:'Python'
                },
                {
                    id: 4,
                    src: require(`../assets/icons/pl/ruby-plain.svg`),
                    text:'Ruby'
                },
            ],
                
            web:[
                {
                    id: 0,
                    src: require(`../assets/icons/web/html5-plain.svg`),
                    text:'HTML 5'
                },
                {
                    id: 1,
                    src: require(`../assets/icons/web/css3-plain.svg`),
                    text:'CSS3'
                },
                {
                    id: 2,
                    src: require(`../assets/icons/web/javascript-plain.svg`),
                    text:'JavaScript'
                },
            ],

            frameworks:[
                {
                    id: 0,
                    src: require(`../assets/icons/frameworks/dot-net-plain.svg`),
                    text:" .NET"
                },
                {
                    id: 1,
                    src: require(`../assets/icons/frameworks/nodejs-plain.svg`),
                    text:'Node.js'
                },
                {
                    id: 2,
                    src: require(`../assets/icons/frameworks/rails-plain.svg`),
                    text:'Rails'
                },
                {
                    id: 3,
                    src: require(`../assets/icons/frameworks/vuejs-plain.svg`), 
                    text:'Vue.js'
                }
            ],

            database:[
                {  
                   id: 0,
                   src: require(`../assets/icons/database/postgresql-plain.svg`),
                   text:'Postgre SQL'  
                },
                {
                   id: 1,
                   src: require(`../assets/icons/database/mssql.png`),
                   text:'MS SQL'  
                }
            ]

        }
    }
    }
    </script>
    <style scoped>
    #skills-container{
        width: 75%;
        margin: auto;
        height: 100%;
        margin-top: 0;
    }
    h1{
        margin-top: 0;
    }
    
    .container-row{
        box-shadow: 1px 1px 1px 1px;
        background-color: #f1f1f1;
        padding-bottom: 1px;
    }
    .img-container{
        text-align: center;
        height: 60px;
        width: 100px;
        display: inline-block;
        margin-right: 1vw;
    }
    label{
        font-weight: bold;
    }
    img{
        height: 75%;
        width: 100%;
    }
   h3{
       text-decoration: underline;
   }
   #custom{
     animation-delay: 500ms;
   }
    </style>