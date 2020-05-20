<template>
    <div>
        <v-card tile class="mt-1">
            <v-card-text>
                <v-row><v-col cols="12"><span class="heading">Contact</span></v-col></v-row>
               
               <v-row>
                   <v-col cols="12" md="8">
                        <v-form ref="contactForm">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="email"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"
                                    label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="phone"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"
                                    label="Mobile"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                    outlined
                                    v-model="subject"
                                    :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"
                                    label="Sujet"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                    label="Votre message"
                                    v-model="message"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'Ce champs est requis.'
                                    ]"
                                    ></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" align="right">
                                    <v-btn color="primary" tile @click="sendMessage">Send</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                   </v-col>

                   <v-col cols="12" md="4">
                       <div><v-icon>mdi-email</v-icon>stephaneweb@orange.fr</div>
                       <div><v-icon>mdi-phone</v-icon> 07.07.07.07 </div>
                   </v-col>
               </v-row>
                

            
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default {
        methods:{
            sendMessage(){
                if(!this.$refs.contactForm.validate()) return
                    
                
            }
        }
    }
</script>