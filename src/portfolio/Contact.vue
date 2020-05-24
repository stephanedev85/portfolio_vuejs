<template>
    <div>
        <v-card tile class="mt-1">
            <v-card-text>
                <v-row>
                    <v-col cols="12"><span class="heading">Contact</span></v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="8">
                        <v-form ref="contactForm" v-on:submit="submitForm">

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="Email" outlined :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]" label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="Nom" outlined :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]" label="Nom"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-text-field outlined v-model="Sujet" :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]" label="Sujet"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea label="Votre message" v-model="Message" outlined :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" align="right">
                                    <v-btn color="primary" tile @click="sendMessage">Envoyer</v-btn>

                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>

                    <v-col cols="12" md="4">
                        <div class="menu">
                            <v-icon class="icon">mdi-email </v-icon> stephaneweb@orange.fr
                        </div>
                        <div class="menu">
                            <v-icon class="icon">mdi-phone </v-icon> 07.84.38.59
                        </div>
                        <div class="menu">
                            <v-icon class="icon">mdi-home </v-icon> 28 la renaudière.
                        </div>
                        <div class="menu">
                            <v-icon class="icon">mdi-star</v-icon> Sainte-Flaive des loups.
                        </div>

                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>

</template>
<script>
    import axios from 'axios'


    export default {
        data() {
            return {

                Email: '',
                Nom: '',
                Sujet: '',
                Message: '',

            }
        },

        methods: {
            sendMessage() {
                if (!this.$refs.contactForm.validate()) return

                let userInput = {
                    Email: this.Email,
                    Nom: this.Nom,
                    Sujet: this.Sujet,
                    Message: this.Message,


                }
                axios.post('http://localhost:4000/sendmail', userInput)
                    .then(response => {
                           this.$refs.contactForm.reset();
                        console.log(response.data);

                    })
                    .catch(error => {
                        console.log(error.response.data);

                    })
            }
        },

    }
</script>
<style>
    .menu {
        margin-left: 18px;
        font-size: 1.2rem;
        letter-spacing: 2px;
        padding-top: 5px;
        padding-bottom: 10px;
    }

    .Mobile {
        height: 55px;
    }
</style>