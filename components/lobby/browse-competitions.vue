<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <header class="d-flex justify-center">
        Browse Our Competitions:
      </header>
    </v-col>
    <v-col cols="12" sm="12" class="d-flex justify-space-between">
      <v-btn height="60" width="60" class="contest d-flex justify-center align-center" @click="competitionSelected('all')">
        Sports<br>Predictor
      </v-btn>
      <v-btn height="60" width="60" class="contest d-flex justify-center align-center" @click="competitionSelected('premier-league')">
        Premier<br>League
      </v-btn>
      <v-btn height="60" width="60" class="contest d-flex justify-center align-center" @click="competitionSelected('golf')">
        Golf
      </v-btn>
      <v-btn height="60" width="60" class="contest d-flex justify-center align-center">
        NFL
      </v-btn>
      <v-btn height="60" width="60" class="contest d-flex justify-center align-center">
        Nascar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    competitionSelected (type) {
      this.$store.commit('appState/SET_SELECTED_COMPETITION_TYPE', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.contest {
  background-color: #272727;
  font-size: 10px;
  border-radius: 5px;
}
header {
  font-size: 16px;
  font-weight: bold;
}
</style>
