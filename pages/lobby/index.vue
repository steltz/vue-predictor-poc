<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <app-browse-competitions />
      <app-competitions-list />
    </v-col>
  </v-row>
</template>

<script>
import AppBrowseCompetitions from '../../components/lobby/browse-competitions'
import AppCompetitionsList from '../../components/lobby/competitions-list'

export default {
  components: {
    AppBrowseCompetitions,
    AppCompetitionsList
  }
}
</script>
