<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
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
    submitPicks () {
      this.$router.push({ path: '/lobby' })
    }
  }
}
</script>
