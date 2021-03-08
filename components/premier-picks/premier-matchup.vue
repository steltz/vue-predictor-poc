<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-card class="d-flex justify-space-between align-center">
        <div class="team-name">
          {{ matchup.team1.name }}
        </div>
        <div class="d-flex flex-column align-center">
          <v-icon large @click="incrementScore(matchup.id, 'team1')">
            mdi-chevron-up
          </v-icon>
          <div>{{ matchup.team1.score }}</div>
          <v-icon large @click="decrementScore(matchup.id, 'team1')">
            mdi-chevron-down
          </v-icon>
        </div>
        <div class="d-flex flex-column align-center">
          <v-icon large @click="incrementScore(matchup.id, 'team2')">
            mdi-chevron-up
          </v-icon>
          <div>{{ matchup.team2.score }}</div>
          <v-icon large @click="decrementScore(matchup.id, 'team2')">
            mdi-chevron-down
          </v-icon>
        </div>
        <div class="team-name d-flex justify-end">
          {{ matchup.team2.name }}
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    matchup: {
      type: Object,
      default: () => {
        return {
          id: null,
          team1: null,
          team2: null
        }
      }
    }
  },
  methods: {
    incrementScore (matchupId, selection) {
      this.$store.commit('appState/INCREMENT_SCORE', { matchupId, selection })
    },
    decrementScore (matchupId, selection) {
      if (this.matchup[selection].score > 0) {
        this.$store.commit('appState/DECREMENT_SCORE', { matchupId, selection })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.team-name {
  width: 100px;
  font-size: 13px;
  padding: 10px;
  font-weight: bold;
}
</style>
