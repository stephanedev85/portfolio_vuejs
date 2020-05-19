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
                      <div class="resume-item" v-for="(experience, index) in Experiences" :key="index">
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
                      <div class="resume-item" v-for="(diplome, index) in   Diplomes" :key="index">
                          <div class="resume-item-heading">
                             <div class="title"> {{diplome.titre}}</div>
                              <div class="resume-item-period">{{diplome.date}} 
                          </div>
                          <div class="resume-item-organization">{{diplome.lieu}}</div>
                          <div class="resume-item-description bb">{{diplome.certificat}}</div>
                          </div>
                      </div>
                    <!--SECTION CENTRE D' INTERET -->
                              <div class="sub-heading mt-8">
                          <span>Centres d'intérêt informatiques.</span>
                          <span class="sub-heading-icon"><v-icon class="white--text">mdi-basketball</v-icon></span>
                      </div>
                      <div class="resume-item" v-for="(loisir, index) in   Hobby" :key="index">
                          <div class="resume-item-heading">
                             <div class="resume-item-description bb mt-8"> {{loisir.titre}}</div>
                              
                          
                          
                          
                          </div>
                      </div>
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
                      <div v-for="(group, index) in competencesGroup" :key="index">
                          <div class="sub-heading mt-8">
                          <span>{{group.name}}</span>
                          <span class="sub-heading-icon"><v-icon color="#fff">{{group.icon}}</v-icon></span>
                      </div>
                      <div class="skill-wrapper" v-if="group.Competences">
                          <div class="skill-item" v-for="(Competence, index) in group.Competences" :key="index+300">
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
            
            Experiences:[
                {
                    id: 1,
                    designation: "YOUTUBE",
                    company: "TUTO DEVELOPPEUR MAISON", 
                    description: "Création de tutoriels afin de consolider mon aisance orale et technique",
                    date: "Octobre 2019"
                },
                
                {
                    id: 2,
                    designation: "STAGE",
                    company: "FBO LA ROCHE SUR YON",
                    description:"STAGE EN ENTREPRISE CONCEPTION D'UNE APPLICATION JAVAGOOGLE VISION OCR.Recherche et compréhension de la base de données relationnelles. Utilisation de spring boot pour effectuer les GET. Organisation autour du logiciel TRELLO et application de la méthode SCRUM AGILE tout au long du stage.",
                    date: "Juillet 2019"
                },

                {
                    id: 3,
                    designation: "CROUPIER", 
                    company: "JOA CASINO DES PINS LES SABLES D'OLONNE", 
                    description: "Animer les tables de jeux",
                    date: "De février 2008 à juillet 2018"
                },

                {
                    id: 4,
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
                    id: 1,
                    titre: "Création de site web",
                },
                {
                    id: 2,
                    titre: "Unity 3B jeux",     
                },
                {
                    id: 3,
                    titre: "Tutoriels Udemy",   
                },
                {
                    id: 4,
                    titre: "Blockchain etheréum",   
                },
            ],
            langues:[
                {
                    id: 1,
                    name: "Français",
                    percent_completed: 90 
                },
                {
                    id: 2,
                    name: "Anglais",
                    percent_completed: 55
                },
            ],
            competencesGroup:[
                {
                    id: 1,
                    name: "Langages",
                    icon: "mdi-developer-board",
                    Competences:[
                        {
                            id: 1,
                            name: "HTML",
                            percent_completed: 60
                        },
                        {
                            id: 2,
                            name: "CSS",
                            percent_completed: 55
                        },
                        {
                            id: 3,
                            name: "JAVASCRIPT",
                            percent_completed: 40
                        },
                        {
                            id: 4,
                            name: "HANDLEBARS",
                            percent_completed: 30
                        }
                       
                    ]
                },
                {
                    id: 2,
                    name: "Frameworks",
                    icon: "mdi-electron-framework",
                    Competences:[
                        {
                            id: 1,
                            name: "WORDPRESS",
                            percent_completed: 55
                        },
                        {
                            id: 2,
                            name: "BOOTSTRAP",
                            percent_completed: 55
                        },
                        {
                            id: 3,
                            name: "EXPRESS",
                            percent_completed: 60
                        },
                        {
                            id: 4,
                            name: "VUEJS",
                            percent_completed: 30
                        }
                    ]
                },
                {
                    id: 3,
                    name: "BACK-END",
                    icon: "mdi-server",
                    Competences:[
                        {
                            id: 1,
                            name: "NODEJS",
                            percent_completed: 40
                        },
                        {
                            id: 2,
                            name: "MONGODB",
                            percent_completed: 30
                        },
                        {
                            id: 3,
                            name: "SERVER OVH",
                            percent_completed: 60
                        },
                        {
                            id: 4,
                            name: "SERVEUR LINUX",
                            percent_completed: 55
                        },
                    ]
                },
                {
                    id: 4,
                    name: "OS",
                    icon: "mdi-disc",
                    Competences:[
                        {
                            id: 1,
                            name: "LINUX",
                            percent_completed: 40
                        },
                        {
                            id: 2,
                            name: "WINDOWS",
                            percent_completed: 50
                        },
                    ]
                },
                {
                    id: 5,
                    name: "LOGICIELS",
                    icon: "mdi-loading",
                    Competences:[
                        {
                            id: 1,
                            name: "VISUAL CODE STUDIO",
                            percent_completed: 55
                        },
                        {
                            id: 2,
                            name: "GITHUB",
                            percent_completed: 45
                        },
                        {
                            id: 3,
                            name: "TRELLO",
                            percent_completed: 40
                        },
                        {
                            id: 4,
                            name: "WORDPRESS",
                            percent_completed: 40
                        },
                    ]
                },
                {
                    id: 6,
                    name: "RESEAU",
                    icon: "mdi-link",
                    Competences:[
                        {
                            id: 1,
                            name: "LAMP",
                            percent_completed: 70
                        },
                        {
                            id: 2,
                            name: "XAMP",
                            percent_completed: 70
                        },
                        {
                            id: 3,
                            name: "OVH",
                            percent_completed: 50
                        },
                    ]       
                },
                {
                    id:7,
                    name: "MATERIEL",
                    icon: "mdi-material-design",
                    Competences:[
                        {
                            id: 1,
                            name: "MONTAGE PC HARDWARE",
                            percent_completed: 80
                        },
                        {
                            id: 2,
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