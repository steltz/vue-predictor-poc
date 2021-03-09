<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-card v-for="matchup in premierMatchups" :key="matchup.id" class="mb-5 pa-3">
        <div class="d-flex justify-space-between align-center">
          <div>{{ matchup.team1.name }}</div>
          <div class="d-flex flex-column align-center">
            <div class="live-score">
              <span>{{ matchup.team1.liveScore }}</span>
              <span>-</span>
              <span>{{ matchup.team2.liveScore }}</span>
            </div>
            <div class="d-flex flex-column align-center my-pick">
              <div>MY PICK</div>
              <hr>
              <div>
                <span>{{ matchup.team1.score }}</span>
                <span>-</span>
                <span>{{ matchup.team2.score }}</span>
              </div>
            </div>
          </div>
          <div>{{ matchup.team2.name }}</div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('appState', ['premierMatchups'])
  }
}
</script>

<style lang="scss" scoped>
hr {
  width: 100%;
}
.live-score {
  font-size: 30px;
  font-weight: bold;
}
.my-pick {
  font-size: 15px;
  letter-spacing: 1px;
}
</style>
