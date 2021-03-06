<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <app-browse-competitions />
    </v-col>
  </v-row>
</template>

<script>
import AppBrowseCompetitions from '../../components/lobby/browse-competitions'
export default {
  components: {
    AppBrowseCompetitions
  }
}
</script>
