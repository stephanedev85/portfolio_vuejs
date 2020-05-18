<template>
  <v-app>
    <v-container>
      <v-content>
        <v-row>
          <v-col cols="12" md="6" class="title">
            Desmaretz stephane
          </v-col>
          <v-col cols="12" md="6" align="right">
            <v-btn v-for="(social, index) in socialLink" :key="social.name+index" class="icon" color="#fff" tile target="_blank" :to="social.url"><v-icon>{{social.icon}}</v-icon></v-btn>  
            
          </v-col>
        </v-row>
        <v-card tile>
          <v-card-text>
            <v-row>
              <v-col col="12">
                <v-span class="heading">À propos de moi</v-span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols=12 md="3">
                <v-img class="img" v-bind:src="profileImage"></v-img>
              </v-col>
              <v-col cols=12 md="4">
                <h3 class="headline text-center">Je suis à la recherche d'un contrat de professionnalisation en vue de préparer le diplôme de concepteur développeur d'applications.</h3>
                <br>
                <p>J'ai des connaissances dans les domaines suivants: html, css, javascript, nodejs, bootstrap, bulma, mongodb, wordpress, et tout récemment vueJS et react</p>
                <p>J'ai créé quelques sites vitrine et blogs wordpress.</p>
                <p>Je m'intéresse à la blockchain etheréum.</p> 
              </v-col>
              <v-col cols=12 md="5">
                <div class="my-attr"><span>Nom </span> Desmaretz stéphane</div>
                <div class="my-attr"><span>Age </span> 43 ans </div>
                <div class="my-attr"><span>adresse </span> Sainte-flaive des loups</div>
                <div class="my-attr"><span>Email </span>stephaneweb@orange.fr</div>
              </v-col>
            </v-row>  
          </v-card-text>
            <v-card-actions class="elevation-0">
              <v-toolbar-items>
                <v-btn color="secondary" text>À propos</v-btn>
                <v-btn color="secondary" text>CV</v-btn>
                <v-btn color="secondary" text>la revue</v-btn>
                <v-btn color="secondary" text>Contact</v-btn>
              </v-toolbar-items>  
            </v-card-actions>
        </v-card>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data(){
    return{
      profileImage: require('./assets/penguin.png'),
      socialLink:[
        {
          id: 1,
          icon: 'mdi-twitter',
          url: '//twitter.com/WendyMa64422957',
          name: 'facebook'
        },
        {
          id: 2,
          icon: 'mdi-youtube',
          url: '//www.youtube.com/channel/UCgNVngS9U_xtQHpYflBrVXg?view_as=subscriber',
          name: 'Youtube'
        },
        {
          id: 3,
          icon: 'mdi-linkedin',
          url: '//www.linkedin.com/feed/',
          name: 'Linkedin'
        },
        {
          id: 4,
          icon: 'mdi-git',
          url: '//github.com/stephanedev85',
          name: 'Github'
        }
      ]

    }
  }
 
}
</script>
/* LES STYLES */
 <style>
.heading{
  background-color: #414141;
  color: #fff;
  padding: 10px 5px;
  font-size: 18px;
  border-radius: 10px 0px;
}
.img{
  width: 50%;
}
.my-attr{
  padding: 10px;
  margin: 5px 10px;
}
.my-attr>span{
  background-color: #414141;
  color: #fff;
  padding:10px;
  margin-right: 15px;
  border-radius: 10px 0px;
}

 </style>

