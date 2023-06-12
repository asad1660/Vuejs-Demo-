<template>
  <v-card>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-card min-width="300">
          <v-list>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" title="Asad khan" subtitle="asad@gmail.com">
              <template v-slot:append>

              </template>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>


          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn variant="text" @click="menu = false">
              Cancel
            </v-btn>
            <v-btn color="primary" variant="text" @click="logout()">
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
      </v-window-item>
    </v-window>
  </v-card>
  {{ isUserAuth }}
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  inject: ['eventBus'],
  data() {
    return {
      tab: null,
      name: '',
      email: '',
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      userdetail: {}
    }
  },
  computed: {
    ...mapGetters({
      isUserAuth: 'getAuthStatus',
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  mounted() {
    this.eventBus.$on('user_data', (data) => {
      console.log('data', data)
      this.name = data.firstname + data.lastname;
      this.email = data.email;
    })
  }
}
</script>