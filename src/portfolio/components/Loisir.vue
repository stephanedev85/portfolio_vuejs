<template>
    <div>
        <!--SECTION CENTRE D'INTERET -->
        <div class="sub-heading mt-8">
            <span>Centres d'intérêt.</span>
            <span class="sub-heading-icon">
                <v-icon class="white--text">mdi-baseball</v-icon>
            </span>
        </div>
        <div class="resume-item" v-for="(loisir, n) in   Loisir" :key="n">
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
                Loisir: [{
                        id: 13,
                        titre: "Guitariste amateur"
                    },
                    {
                        id: 14,
                        titre: "Jardinage"
                    },
                    {
                        id: 15,
                        titre: "Bricolage"
                    }
                ],
            }
        }
    }
</script>