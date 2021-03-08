<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-card v-for="competition in competitionList" :key="competition.description" class="my-5 pa-5">
        <div class="d-flex justify-center description">
          {{ competition.description }}
        </div>
        <div class="d-flex justify-center mt-1 title">
          {{ competition.title }}
        </div>
        <div class="d-flex justify-center mt-1 prize">
          $50,000
        </div>
        <div class="d-flex justify-center mt-7">
          <v-btn outlined class="green" @click="setSelectedCompetition(competition)">
            View
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('appState', ['competitions', 'selectedCompetitionType']),
    competitionList () {
      if (this.selectedCompetitionType === 'all') {
        return this.competitions
      } else {
        return this.competitions.filter(competition => competition.type === this.selectedCompetitionType)
      }
    }
  },
  methods: {
    setSelectedCompetition (competition) {
      const { type } = competition
      const path = (type === 'golf') ? '/golf-picks' : '/premier-picks'
      this.$store.commit('appState/SET_SELECTED_COMPETITION', competition)
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  font-size: 10px;
  letter-spacing: 1px;
}
.prize {
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: bold;
}
.title {
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
