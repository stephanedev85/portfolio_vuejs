<template>
    <div>
        <!--SECTION CENTRE D' INTERET INFORMATIQUE -->
        <div class="sub-heading mt-8">
            <span>Centres d'intérêt informatiques.</span>
            <span class="sub-heading-icon">
                <v-icon class="white--text">mdi-basketball</v-icon>
            </span>
        </div>
        <div class="resume-item" v-for="(loisir, d) in   Hobby" :key="d">
            <div class="resume-item-heading">
                <div class="resume-item-description bb mt-8">{{loisir.titre}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Hobby: [{
                        id: 8,
                        titre: "Création de site web"
                    },
                    {
                        id: 9,
                        titre: "Unity3D jeux"
                    },
                    {
                        id: 10,
                        titre: "Tutoriels Udemy"
                    },
                    {
                        id: 11,
                        titre: "Blockchain ethéréum"
                    },
                    {
                        id: 12,
                        titre: "Cryptomonnaies"
                    }
                ],
            }
        }
    }
</script>