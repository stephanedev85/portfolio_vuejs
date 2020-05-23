<template>
    <div>
        <!-- SECTION EDUCATION -->
        <div class="sub-heading mt-8">
            <span>Diplômes et formations.</span>
            <span class="sub-heading-icon">
                <v-icon class="white--text">mdi-school</v-icon>
            </span>
        </div>
        <div class="resume-item" v-for="(diplome, x) in Diplomes" :key="x">
            <div class="resume-item-heading">
                <div class="title">{{diplome.titre}}</div>
                <div class="resume-item-period">{{diplome.date}}</div>
                <div class="resume-item-organization">{{diplome.lieu}}</div>
                <div class="resume-item-description bb">{{diplome.certificat}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Diplomes: [
                    {
                        id: 5,
                        titre:"DÉVELOPPEUR WEB.",
                        lieu:"ARINFO LA ROCHE SUR YON.",
                        certificat:"DÉVELOPPEUR WEB ET MOBILE - BAC+2 (BTS, DUT OU ÉQUIVALENTS)-PROGRAMMATION WEB.",
                        date:"2019 à 2019."
                    },

                    {
                        id: 6,
                        titre:"CROUPIER.",
                        lieu:"CERUS ACADEMY PARIS 20 EME.",
                        certificat:"DIPLÔME DE CROUPIER (BAC PROFESSIONNEL).",
                        date:"2008 à 2008."
                    },

                    {
                        id: 7,
                        titre:"COMMIS AUX VIVRES",
                        lieu:"ÉCOLE DES FOURRIERS ROCHEFORT SUR MER.",
                        certificat:"BAT MARINE NATIONALE.",
                        date:"2000 à 2001."
                    }
                ],
            }
        }
    }
</script>