<template>
    <div>
       <v-card tile class="md-1">
           <v-card-text>
               <v-row>
                    <v-col col="12">
                        <v-span class="heading">Curriculum Vitae</v-span>
                    </v-col>
              </v-row>
              <v-row>
                  <v-col cols="12" md="8">
                      <div class="sub-heading">
                          <span>Expériences professionnelles</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-worker</v-icon></span>
                      </div>
                  </v-col>
                  <v-col cols="12" md="4">

                  </v-col>
              </v-row>
           </v-card-text>
       </v-card>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>

.sub-heading {
    background-color: #313131;
    color: #fff;
    padding: 5px;
    position: relative;
}
.sub-heading-icon{
position: absolute;
right: 5px;

}
</style>