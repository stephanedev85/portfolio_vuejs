<template>
  <v-app>
    <v-container class="back-grey">
      <v-content>
        <v-row>
          <v-col cols="12" md="6" class="title">
            <h1>Desmaretz stephane</h1>
          </v-col>
          <v-col cols="12" md="6" align="right">
            <v-btn v-for="(social, o) in socialLink" :key="social.name+o" class="icon" color="#fff" tile target="_blank"
              :to="social.url">
              <v-icon>{{social.icon}}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card tile>
          <v-card-text>
            <v-row>
              <v-col col="12">
                <span class="heading">À propos de moi</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols=12 md="3">
                <v-img class="img" v-bind:src="profileImage"></v-img>
              </v-col>
              <v-col cols=12 md="4">
                <h2 class="moi">À propos de moi</h2>
                <br>
                <h3 class="headline-text-justified">Je suis à la recherche d'un contrat de professionnalisation en vue
                  de préparer le diplôme de concepteur développeur d'applications.</h3>
                <br>
                <p>J'ai des connaissances dans les domaines suivants: html, css, javascript, nodejs, bootstrap, bulma,
                  mongodb, wordpress, et tout récemment vueJS et react</p>
                <p>J'ai créé quelques sites vitrine et blogs wordpress.</p>
                <p>Je m'intéresse à la blockchain etheréum.</p>
              </v-col>
              <v-col cols=12 md="5">
                <div class="my-attr"><span>Nom  </span> Desmaretz stéphane</div>
                <div class="my-attr"><span>Age </span> 43 ans </div>
                <div class="my-attr"><span>Adresse </span> Sainte-flaive des loups</div>
                <div class="my-attr"><span>Email </span> stephaneweb@orange.fr</div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="elevation-0">
            <v-toolbar-items>
              <v-container>
                <v-row>
                  <v-btn color="secondary" text>À propos</v-btn>
                  <v-btn color="secondary" text to="/">CV</v-btn>
                  <v-btn color="secondary" text to="/Projet">Mes projets</v-btn>
                  <v-btn color="secondary" text to="/Contact">Contact</v-btn>
                </v-row>
              </v-container>
            </v-toolbar-items>
          </v-card-actions>
        </v-card>
      </v-content>

      <router-view></router-view>

      <v-footer class="pa-3">
        <div>&copy; {{ new Date().getFullYear() }} Desmaretz stéphane.</div>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
//  import VueRecaptcha from 'vue-recaptcha';
  export default {
    name: 'App',

    data() {
      return {
        profileImage: require('./assets/penguin.png'),
        socialLink: [{
            id: 45,
            icon: 'mdi-twitter',
            url: '//twitter.com/WendyMa64422957',
            name: 'facebook'
          },
          {
            id: 46,
            icon: 'mdi-youtube',
            url: '//www.youtube.com/channel/UCgNVngS9U_xtQHpYflBrVXg?view_as=subscriber',
            name: 'Youtube'
          },
          {
            id: 47,
            icon: 'mdi-linkedin',
            url: '//www.linkedin.com/in/stephane-desmaretz-53a510196/',
            name: 'Linkedin'
          },
          {
            id: 48,
            icon: 'mdi-git',
            url: '//github.com/stephanedev85',
            name: 'Github'
          }
        ],

      }
    },
  }
</script>
<!-- LES STYLES -->
<style>
  .heading {
    background-color: #414141;
    color: #fff;
    padding: 10px 5px;
    font-size: 18px;
    border-radius: 10px 0px;
    margin-left: 5px;
  }

  .img {
    width: 50%;
    margin-left: 70px;
  }

  .my-attr {
    padding: 20px;
    margin-left: 30px;
    margin-top: 10px;
  
  }

  .my-attr>span {
    display: inline-block;
    width: 15%;
    background-color: #414141;
    color: #fff;
    padding: 10px;
    margin-left: 15px;
    border-radius: 10px 0px;
  }

  .headline-text-justified {
    font-size: 1.2em;
    text-transform: uppercase;
  }

  p {
    text-transform: uppercase;
  }

  .back-grey {
    background-color: #ccc;
  }
  .moi{
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
  }
</style>