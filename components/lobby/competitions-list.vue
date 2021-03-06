<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-card v-for="competition in competitionList" :key="competition.description" class="my-5 pa-5">
        <div class="description">
          {{ competition.description }}
        </div>
        <div class="d-flex justify-center mt-1 title">
          {{ competition.title }}
        </div>
        <div class="d-flex justify-center mt-1 prize">
          $50,000
        </div>
        <div class="d-flex justify-center mt-7">
          <v-btn outlined class="green">Play Now</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      competitions: [
        {
          type: 'premier-league',
          title: "Premier League Pick'em",
          description: 'Matchweek 27'
        },
        {
          type: 'premier-league',
          title: "Premier League Pick'em",
          description: 'Matchweek 28'
        },
        {
          type: 'golf',
          title: "Golf Pick'em",
          description: 'The PLAYERS Championship'
        }
      ]
    }
  },
  computed: {
    ...mapState('appState', ['selectedCompetition']),
    competitionList () {
      if (this.selectedCompetition === 'all') {
        return this.competitions
      } else {
        return this.competitions.filter(competition => competition.type === this.selectedCompetition)
      }
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
