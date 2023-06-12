<template>
<v-sheet width="300" class="mx-auto" style="margin-top: 100px;">
    <v-form fast-fail @submit.prevent>
        <v-text-field v-model="form.firstname"  :counter="10" label="First name" required></v-text-field>
        <v-text-field v-model="form.lastname"  :counter="10" label="Last name" required></v-text-field>
        <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="form.password" :rules="passwordRules" label="Password" required></v-text-field>
        <v-btn type="submit" @click="create" block class="mt-2">Submit</v-btn>
    </v-form>
</v-sheet>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "CreateProfile",
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
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
    methods: {
        ...mapActions(['signUp',]),
        create() {
            console.log(this.form)
            this.signUp(this.form)
            this.$router.push('/')
        },
       
    }
};
</script>

<style scoped>
</style>
