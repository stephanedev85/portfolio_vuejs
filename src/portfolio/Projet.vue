<template>
  <diV>
    <v-card>
      <v-row  class="mt-4">
        <v-col col="12">
          <span class="heading">Projets</span>
        </v-col>
      </v-row>
      <v-row  class="mt-4">
        <v-col cols="12" md="4">
          <v-img v-bind:src="Youtube" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Chaîne youtube tuto developpeur</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://www.youtube.com/channel/UCgNVngS9U_xtQHpYflBrVXg?view_as=subscriber" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" md="4">
          <v-img v-bind:src="Phil" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Jeu vidéo réalisé en cours avec victor.</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://desarinfo85.github.io/philSquirel" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" md="4">
          <v-img v-bind:src="CodeImage" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">MiraBlog</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://mirablog.fun" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-row class="mt-8">
        <v-col cols="12" md="4">
          <v-img v-bind:src="Github" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Mon compte Github</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://github.com/stephanedev85" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" md="4">
          <v-img v-bind:src="Crypto" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Projet bootstrap sur la cryptomonnaie</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://cryptogratuite.ovh" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" md="4">
          <v-img v-bind:src="Auto" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">EspaceAuto85 garage automobile</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="#ccc"><a href="https://espaceauto85.ovh" target="_blank">Visitez</a></v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </diV>
</template>

<script>
  export default {
 data(){
   return{
     CodeImage: require("../assets/mirablog.jpg"),
     Auto: require("../assets/espaceauto85.jpg"),
     Github: require("../assets/github.png"),
     Phil: require("../assets/philSquirel.jpg"),
     Youtube: require("../assets/youtube.png"),
     Crypto: require("../assets/cryptogratuite.jpg")

   }
  }
 }
</script>
 <style>
 
 a{
   text-decoration: none;
 }
 
 </style>