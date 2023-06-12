<template>
<h1>Parent Component:</h1>
<ChildComponent  :userDetail="userDetail" :getUser="getUserName">
    <template v-slot:header>
    <h1>Parent to child slot:</h1>
</template></ChildComponent>



</template>

    
<script>
import ChildComponent from './ChildComponent.vue';
export default {
    name: 'ParentComponent',
    components:{
        ChildComponent
    },
    data(){
        return {
            userDetail:{name:'Asad', email:'asad.khan@northbaysolutions.net'}
        }
    },
    methods:{
        getUserName(data){
         alert(data);
        }
    }

};
</script>

    
<style>
h1 {
    color: brown;
}
</style>
