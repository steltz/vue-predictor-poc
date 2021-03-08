<template>
  <v-app dark>
    <app-loading-spinner
      :active="showLoadingSpinner"
      background-color="#fff"
      color="#fff"
      :height="64"
      loader="bars"
      :opacity="0.2"
      transition="fade"
      :width="64"
    />
    <v-snackbar
      :value="isSnackbarVisible"
      :color="snackbar.color"
      :timeout="3000"
      top
      outlined
    >
      {{ snackbar.message }}
    </v-snackbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="d-flex justify-space-between">
      <v-btn icon :class="{ primary: $route.path === '/' }" @click="navigate('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon :class="{ primary: $route.path === '/lobby' }" @click="navigate('/lobby')">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
      <v-btn icon :class="{ primary: $route.path === '/live-results' }" @click="navigate('/live-results')">
        <v-icon>mdi-trophy</v-icon>
      </v-btn>
      <v-btn icon :class="{ primary: $route.path === '/leagues' }" @click="navigate('/leagues')">
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn icon :class="{ primary: $route.path === '/my-account' }" @click="navigate('/my-account')">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import AppLoadingSpinner from 'vue-loading-overlay'
import { mapState } from 'vuex'

export default {
  components: {
    AppLoadingSpinner
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      isSnackbarVisible: false,
      items: [
        {
          title: 'About Me',
          to: '/'
        },
        {
          title: 'Lobby',
          to: '/lobby'
        }
      ],
      path: null,
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapState('appState', ['showLoadingSpinner', 'snackbar'])
  },
  watch: {
    snackbar () {
      this.isSnackbarVisible = true
      setTimeout(() => {
        this.isSnackbarVisible = false
      }, 3000)
    }
  },
  methods: {
    navigate (path) {
      this.$router.push({ path })
    }
  }
}
</script>
