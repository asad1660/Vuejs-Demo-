<template>
     <div class="items-center" style="margin-top: 100px;">
<v-sheet width="300" class="mx-auto text-sky-500" >
    <v-form fast-fail @submit.prevent>
        <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="form.password" :rules="passwordRules" label="Password" required></v-text-field>
        <v-btn type="submit" @click="login" block class="mt-2">login</v-btn>
        <v-btn type="submit" to="/signup" block class="mt-2">Sign up</v-btn>
    </v-form>
</v-sheet>
</div>
</template>

    
<script>
import {
    mapActions,mapGetters
} from "vuex";
export default {
    inject: ['eventBus'],
    name: "login",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            emailRules: [
                value => {
                    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) return true

                    return 'Invalid Email'
                },
            ],
            passwordRules: [
                value => {
                    if (value.length > 6) return true

                    return 'Password should greater 6 digits'
                },
            ],

        }
    },
    computed: {
        ...mapGetters({
            userData: 'getAllUser',
            isLoading: 'getLoadingStatus'
        })
    },
    methods: {
        ...mapActions(['getAllUser']),
        
        login() {
            if(this.userData.find(x=> x.email == this.form.email) != undefined && this.userData.find(x=> x.password == this.form.password) != undefined ){
                this.$store.dispatch('login')
                this.$router.push('/home')
                setTimeout(() => {
                    this.eventBus.$emit('user_data',this.userData.filter(x=> x.email == this.form.email && x.password == this.form.password))
                },1000)
                
            }
            else{
                alert('invalid data')
            }
           
           
        },
    },
};
</script>

    
<style scoped>
    </style>
