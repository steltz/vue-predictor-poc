<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <header class="d-flex justify-space-between mb-5">
        <div>Matchweek: 27</div>
        <div>Entries: 35,431</div>
        <div>Prizes</div>
        <div>Scoring</div>
      </header>
      <app-premier-matchup v-for="matchup in premierMatchups" :key="matchup.id" :matchup="matchup" />
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
import AppPremierMatchup from '../../components/premier-picks/premier-matchup'

export default {
  components: {
    AppPremierMatchup
  },
  computed: {
    ...mapState('appState', ['premierMatchups'])
  },
  methods: {
    async submitPicks () {
      await this.$store.dispatch('appState/toggleLoadingSpinner')
      this.$store.commit('appState/TOGGLE_SNACKBAR', {
        visible: true,
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
  font-size: 12px;
}
</style>
