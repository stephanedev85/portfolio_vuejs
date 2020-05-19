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
                    <!-- SECTION PROFESSIONNELLE -->
                  <v-col cols="12" md="8">
                      <div class="sub-heading mt-4">
                          <span>Expériences professionnelles</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-worker</v-icon></span>
                      </div>
                      <div class="resume-item" v-for="(experience, p) in Experiences" :key="p">
                          <div class="resume-item-heading">
                             <div class="title"> {{experience.designation}}</div>
                              <div class="resume-item-period">{{experience.date}} 
                          </div>
                          <div class="resume-item-organization">{{experience.company}}</div>
                          <div class="resume-item-description bb">{{experience.description}}</div>
                          </div>
                      </div>
                    <!-- SECTION EDUCATION -->
                       <div class="sub-heading mt-8">
                          <span>Diplômes et formations.</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-school</v-icon></span>
                      </div>
                      <div class="resume-item" v-for="(diplome, x) in   Diplomes" :key="x">
                          <div class="resume-item-heading">
                             <div class="title"> {{diplome.titre}}</div>
                              <div class="resume-item-period">{{diplome.date}} 
                          </div>
                          <div class="resume-item-organization">{{diplome.lieu}}</div>
                          <div class="resume-item-description bb">{{diplome.certificat}}</div>
                          </div>
                      </div>
                    <!--SECTION CENTRE D' INTERET INFORMATIQUE -->
                        <div class="sub-heading mt-8">
                          <span>Centres d'intérêt informatiques.</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-basketball</v-icon></span>
                      </div>
                      <div class="resume-item" v-for="(loisir, d) in   Hobby" :key="d">
                          <div class="resume-item-heading">
                             <div class="resume-item-description bb mt-8"> {{loisir.titre}}</div>
                          </div>
                      </div>
                      <!--SECTION CENTRE D'INTERET -->
                                <div class="sub-heading mt-8">
                          <span>Centres d'intérêt.</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-baseball</v-icon></span>
                      </div>
                      <div class="resume-item" v-for="(loisir, n) in   Loisir" :key="n">
                          <div class="resume-item-heading">
                             <div class="resume-item-description bb mt-8"> {{loisir.titre}}</div>
                          </div>
                      </div>
                      <!-- ADRESSE -->
                        <v-card class="mt-8">
                         <v-img
                            class="black--text"
                            height="200px"
                            v-bind:src="codeImage">
                            <v-container fill-height fluid>
                                 <v-layout fill-height>
                                     <v-flex xs12 align-end flexbox>
                                     <span class="headline">Adresse</span>
                                     </v-flex>
                                 </v-layout>
                             </v-container>
                         </v-img>
                         <v-card-title>
                                <div>
                                    <span class="grey--text">28, La renaudière</span><br>
                                    <span>85150 Sainte flaive des loups</span><br>
                                    <span>Vendée</span>
                                 </div>
                             </v-card-title>                            
                         </v-card>
                  </v-col>
                            <!-- LANGUES -->
                  <v-col cols="12" md="4">
                      <div class="sub-heading mt-4">
                          <span>Langue</span>
                          <span class="sub-heading-icon"><v-icon color="#fff">mdi-speaker</v-icon></span>
                      </div>
                      <div class="skill-wrapper">
                          <div class="skill-item" v-for="(item, index) in langues" :key="index+200">
                                <div class="skill-name mt-8"> {{item.name}}</div>
                                <v-progress-linear :value="item.percent_completed" width="8"></v-progress-linear>
                          </div>
                      </div> 
                            <!-- COMPETENCES -->
                      <div v-for="(group, i) in competencesGroup" :key="i">
                          <div class="sub-heading mt-8">
                          <span>{{group.name}}</span>
                          <span class="sub-heading-icon"><v-icon color="#fff">{{group.icon}}</v-icon></span>
                      </div>
                      <div class="skill-wrapper" v-if="group.Competences">
                          <div class="skill-item" v-for="(Competence, i) in group.Competences" :key="i+300">
                          <div class="skill-name mt-8">{{Competence.name}}</div>
                         <v-progress-linear :value="Competence.percent_completed" width="8"></v-progress-linear>
                        </div>
                      </div>
                    </div>                                
                  </v-col>
              </v-row>
           </v-card-text>
       </v-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            codeImage: require("../assets/pccodevue.jpg"),
            Experiences:[
                {
                    id: 44,
                    designation: "YOUTUBE",
                    company: "TUTO DEVELOPPEUR MAISON", 
                    description: "Création de tutoriels afin de consolider mon aisance orale et technique",
                    date: "Octobre 2019"
                },
                
                {
                    id: 45,
                    designation: "STAGE",
                    company: "FBO LA ROCHE SUR YON",
                    description:"STAGE EN ENTREPRISE CONCEPTION D'UNE APPLICATION JAVAGOOGLE VISION OCR.Recherche et compréhension de la base de données relationnelles. Utilisation de spring boot pour effectuer les GET. Organisation autour du logiciel TRELLO et application de la méthode SCRUM AGILE tout au long du stage.",
                    date: "Juillet 2019"
                },

                {
                    id: 46,
                    designation: "CROUPIER", 
                    company: "JOA CASINO DES PINS LES SABLES D'OLONNE", 
                    description: "Animer les tables de jeux",
                    date: "De février 2008 à juillet 2018"
                },

                {
                    id: 47,
                    designation: "COMMIS AUX VIVRES",
                    company: "MARINE NATIONALE FRANCE",  
                    description: "Gestionnaire de collectivité au sein de la Marine nationale.",
                    date: "De septembre 1997 à septembre 2007"
                },

            ],
            Diplomes: [
                {
                    id: 1,
                    titre: "DÉVELOPPEUR WEB ET MOBILE.",
                    lieu: "ARINFO LA ROCHE SUR YON.",
                    certificat: "DÉVELOPPEUR WEB ET MOBILE - BAC+2 (BTS, DUT OU ÉQUIVALENTS)-PROGRAMMATION WEB.",
                    date: "De février 2019 à septembre 2019."
                },
                {
                    id: 2,
                    titre: "CROUPIER.",
                    lieu: "CERUS ACADEMY PARIS 20 EME.",
                    certificat: "DIPLÔME DE CROUPIER (BAC PROFESSIONNEL).",
                    date: "De janvier 2008 à juin 2008."
                },
                {
                    id: 3,
                    titre: "COMMIS AUX VIVRES",
                    lieu: "ÉCOLE DES FOURRIERS ROCHEFORT SUR MER.",
                    certificat: "BAT MARINE NATIONALE.",
                    date: " De janvier 2000 à janvier 2001."
                }
            ],
            Hobby: [
                {
                    id: 4,
                    titre: "Création de site web",
                },
                {
                    id: 5,
                    titre: "Unity 3B jeux",     
                },
                {
                    id: 6,
                    titre: "Tutoriels Udemy",   
                },
                {
                    id: 7,
                    titre: "Blockchain etheréum",   
                },
                {
                    id: 8,
                    titre: "Cryptomonnaies",   
                },
            ],
             Loisir: [
                {
                    id: 9,
                    titre: "Guitariste amateur",
                },
                {
                    id: 10,
                    titre: "Jardinage",     
                },
                {
                    id: 11,
                    titre: "Bricolage",   
                },
            ],
            langues:[
                {
                    id: 12,
                    name: "Français",
                    percent_completed: 90 
                },
                {
                    id: 13,
                    name: "Anglais",
                    percent_completed: 55
                },
            ],
            competencesGroup:[
                {
                    id: 14,
                    name: "Langages",
                    icon: "mdi-developer-board",
                    Competences:[
                        {
                            id: 15,
                            name: "HTML",
                            percent_completed: 60
                        },
                        {
                            id: 16,
                            name: "CSS",
                            percent_completed: 55
                        },
                        {
                            id: 17,
                            name: "JAVASCRIPT",
                            percent_completed: 40
                        },
                        {
                            id: 18,
                            name: "HANDLEBARS",
                            percent_completed: 30
                        }
                       
                    ]
                },
                {
                    id: 19,
                    name: "Frameworks",
                    icon: "mdi-electron-framework",
                    Competences:[
                        {
                            id: 20,
                            name: "WORDPRESS",
                            percent_completed: 55
                        },
                        {
                            id: 21,
                            name: "BOOTSTRAP",
                            percent_completed: 55
                        },
                        {
                            id: 22,
                            name: "EXPRESS",
                            percent_completed: 60
                        },
                        {
                            id: 23,
                            name: "VUEJS",
                            percent_completed: 30
                        }
                    ]
                },
                {
                    id: 24,
                    name: "BACK-END",
                    icon: "mdi-server",
                    Competences:[
                        {
                            id: 25,
                            name: "NODEJS",
                            percent_completed: 40
                        },
                        {
                            id: 26,
                            name: "MONGODB",
                            percent_completed: 30
                        },
                        {
                            id: 27,
                            name: "SERVER OVH",
                            percent_completed: 60
                        },
                        {
                            id: 28,
                            name: "SERVEUR LINUX",
                            percent_completed: 55
                        },
                    ]
                },
                {
                    id: 29,
                    name: "OS",
                    icon: "mdi-disc",
                    Competences:[
                        {
                            id: 30,
                            name: "LINUX",
                            percent_completed: 40
                        },
                        {
                            id: 31,
                            name: "WINDOWS",
                            percent_completed: 50
                        },
                    ]
                },
                {
                    id: 32,
                    name: "LOGICIELS",
                    icon: "mdi-loading",
                    Competences:[
                        {
                            id: 33,
                            name: "VISUAL CODE STUDIO",
                            percent_completed: 55
                        },
                        {
                            id: 34,
                            name: "GITHUB",
                            percent_completed: 45
                        },
                        {
                            id: 35,
                            name: "TRELLO",
                            percent_completed: 40
                        },
                        {
                            id: 36,
                            name: "WORDPRESS",
                            percent_completed: 40
                        },
                    ]
                },
                {
                    id: 37,
                    name: "RESEAU",
                    icon: "mdi-link",
                    Competences:[
                        {
                            id: 38,
                            name: "LAMP",
                            percent_completed: 70
                        },
                        {
                            id: 39,
                            name: "XAMP",
                            percent_completed: 70
                        },
                        {
                            id: 40,
                            name: "OVH",
                            percent_completed: 50
                        },
                    ]       
                },
                {
                    id: 41,
                    name: "MATERIEL",
                    icon: "mdi-material-design",
                    Competences:[
                        {
                            id: 42,
                            name: "MONTAGE PC HARDWARE",
                            percent_completed: 80
                        },
                        {
                            id: 43,
                            name: "INSTALLATION SOFTWARE",
                            percent_completed: 80
                        },
                    ]
                }
            ]   
        }
    }
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
.resume-item-heading{
    position: relative;

}
.resume-item-period{
    position: absolute;
    right: 0;
    top: 5px;
    border-bottom: 1px inset #313131;
}
.resume-item-description{
    border-left: 1px solid #3c3c3c;
    padding: 10px;
}
.bb{
    border-bottom: 1px inset #313131;

}
</style>