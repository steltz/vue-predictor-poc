<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <header class="mb-5 d-flex justify-center">Premier League</header>
      <app-results-list />
    </v-col>
  </v-row>
</template>

<script>
import AppResultsList from '../../components/live-results/results-list'
export default {
  components: {
    AppResultsList
  }
}
</script>

<style lang="scss" scoped>
header {
  font-size: 30px;
  font-weight: bold;
}
</style>
