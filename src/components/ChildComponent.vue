<template>
    <div>
        <h3>{{ userDetail }}</h3>
    </div>
    <v-btn color="primary" variant="text" v-on:click="getUser(userName)">
        send data to parent
    </v-btn>
    <h3 style="color:black">Child Component</h3>
    <header><slot name="header"></slot></header>
    
</template>

    
<script>
export default {
    name: 'ChildComponent',
    data() {
        return { userName: "bruce" }
    },
    props: {
        userDetail: Object,
        getUser: Function
    }
};
</script>

    
<style>
h1 {
    color: brown;
}
</style>
