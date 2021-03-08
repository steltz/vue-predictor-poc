<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <div class="d-flex justify-space-between align-center">
        <v-btn width="150" :class="{ primary: matchup.selected === 'player1' }" @click="selectPlayer(matchup.id, 'player1')">
          {{ matchup.player1.firstName }}<br>{{ matchup.player1.lastName }}
        </v-btn>
        <div>vs.</div>
        <v-btn width="150" :class="{ primary: matchup.selected === 'player2' }" @click="selectPlayer(matchup.id, 'player2')">
          {{ matchup.player2.firstName }}<br>{{ matchup.player2.lastName }}
        </v-btn>
      </div>
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
          player1: null,
          player2: null,
          selected: null
        }
      }
    }
  },
  methods: {
    selectPlayer (matchupId, player) {
      this.$store.commit('appState/GOLF_SET_SELECTED_PLAYER', { matchupId, player })
    }
  }
}
</script>
