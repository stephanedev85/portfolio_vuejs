<template>
    <div>
        <v-card tile class="mt-1">
            <v-card-text>
                <v-row>
                    <v-col cols="12"><span class="heading">Contact</span></v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="8">
                        <v-form ref="contactForm">

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="Email" outlined :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]" label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <vue-tel-input class="Mobile" type="number" v-model="phone"
                                        outlined :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]" label="phone" aria-placeholder="téléphone (optionnel)"></vue-tel-input>
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
                                    <v-textarea label="Votre message" v-model="Message" outlined
                                        :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" align="right">
                                    <v-btn color="primary" tile @click="sendMessage">Envoyer</v-btn>
                                    <div>
                                        <v-row>
                                            <v-col cols="12" align="right">
                                                <vue-recaptcha sitekey= process.env.KEY_CAPTCHA
                                                    :loadRecaptchaScript="true"></vue-recaptcha>
                                            </v-col>
                                        </v-row>
                                    </div>

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

                <v-row>
                    <v-col cols="12">
                        <GmapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 100%; height: 400px">
                            <GmapMarker :position="center" :clickable="true" :draggable="true" @click="center" />
                        </GmapMap>
                    </v-col>
                </v-row>


            </v-card-text>
        </v-card>
    </div>

</template>
<script>
    import axios from 'axios'
    import VueRecaptcha from 'vue-recaptcha'
    export default {
        data() {
            return {
              
                Email: '',
                reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone: '',
                Sujet: '',
                Message: '',

                center: {
                    lat: 46.6167,
                    lng: -1.579
                }

            }
        },
        methods: {
            sendMessage() {
                if (!this.$refs.contactForm.validate()) return

                let userInput = {
                    Email: this.Email,
                    phone: this.phone,
                    Sujet: this.Sujet,
                    Message: this.Message,

                }
                axios.post('http://localhost:3000/sendmail', userInput)
                    .then(response => {
                        console.log(response.data);

                    })
                    .catch(error => {
                        console.log(error.response.data);

                    })
            }
        },
        components: {
            VueRecaptcha
        }
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