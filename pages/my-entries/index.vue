<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-tabs v-model="tab" centered grow>
        <v-tab key="upcoming">
          Upcoming
        </v-tab>
        <v-tab key="completed">
          Completed
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item key="upcoming">
          <div class="d-flex justify-center align-center flex-column pa-3 mb-5">
            <div>Premier League</div>
            <div class="mb-3">
              Matchweek 27
            </div>
            <v-btn small class="primary" @click="$router.push({path: '/live-results'})">
              Track your picks
            </v-btn>
          </div>
          <div class="d-flex justify-center align-center flex-column pa-3 mb-5">
            <div>Golf</div>
            <div class="mb-3">
              The PLAYERS Championship
            </div>
            <v-btn small class="primary" @click="$router.push({path: '/golf-picks'})">
              Edit your picks
            </v-btn>
          </div>
        </v-tab-item>
        <v-tab-item key="completed">
          <div class="mt-7 pa-5">
            You have no completed contests. Return to the lobby to enter a contest.
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      tab: 'upcoming'
    }
  }
}
</script>

<style lang="scss">
.v-tabs-bar {
  background-color: #121212 !important;
}
.v-tabs-items {
  background-color: #121212 !important;
}
</style>
