<template>
  <div v-if="isUserAuth">
    <Header />
  </div>
      <router-view></router-view>
</template>

<script>
import Header from './components/Layout/AppHeader.vue'
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'App',
  components:{
    Header,
  },
  computed: {
    ...mapGetters({
      isUserAuth: 'getAuthStatus',
    })
  },
}
</script>
