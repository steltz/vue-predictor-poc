<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <header class="d-flex justify-center mb-5">
        Final Tournament Score
      </header>
      <app-player-matchup v-for="matchup in golfPlayerMatchups" :key="matchup.id" :matchup="matchup" />
      <div class="d-flex justify-center mt-5">
        <v-btn class="green" @click="submitPicks()">
          Submit Picks
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import AppPlayerMatchup from '../../components/golf-picks/player-matchup'

export default {
  components: {
    AppPlayerMatchup
  },
  computed: {
    ...mapState('appState', ['golfPlayerMatchups'])
  },
  methods: {
    async submitPicks () {
      await this.$store.dispatch('appState/toggleLoadingSpinner')
      this.$store.commit('appState/TOGGLE_SNACKBAR', {
        color: 'success',
        message: 'Picks Saved'
      })
      this.$router.push({ path: '/lobby' })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  font-size: 16px;
  font-weight: bold;
}
</style>
