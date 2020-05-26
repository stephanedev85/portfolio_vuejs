<template>
  <diV>
    <v-card tile class="mt-5">
      <v-card-text class="mt-8 mb-5">
        <v-row>
          <v-col cols="12">
            <span class="heading">Mes projets</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="Youtube" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Chaîne youtube</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://www.youtube.com/channel/UCgNVngS9U_xtQHpYflBrVXg?view_as=subscriber"
                  target="_blank">Visitez</a></v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="Phil" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Jeu vidéo Phaser.</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://desarinfo85.github.io/philSquirel" target="_blank">Visitez</a>
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="CodeImage" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">MiraBlog</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://mirablog.fun" target="_blank">Visitez</a></v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text class="mt-8 mb-5">
        <v-row>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="Github" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Mon compte Github</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://github.com/stephanedev85" target="_blank">Visitez</a>
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="Crypto" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Tuto cryptomonnaie</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://cryptogratuite.ovh" target="_blank">Visitez</a>
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="img-projet" v-bind:src="Auto" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">EspaceAuto85</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="alert"><a href="https://espaceauto85.ovh" target="_blank">Visitez</a></v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </diV>
</template>

<script>
  export default {
    data() {
      return {
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
  a {
    text-decoration: none;
  }

  .heading {
    background-color: #414141;
    color: #fff;
    padding: 10px 5px;
    font-size: 18px;
    border-radius: 10px 0px;
    margin-left: 5px;
  }

  .img-projet {
    box-shadow: 10px 10px 5px 5px grey;
    opacity: 0.75;
  }
  @media only screen and (max-device-width:480px){

  }
   @media only screen and (max-device-width:800px){
    
  }
</style>