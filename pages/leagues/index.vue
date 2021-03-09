<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <div class="d-flex flex-column align-center mb-5">
        <header class="mb-2">
          Welcome to Leagues!
        </header>
        <div class="mb-5 info-text">
          Compete with friends and fans in small contests
        </div>
      </div>
      <div class="d-flex justify-space-between mt-5">
        <v-btn class="primary" outlined @click="$router.push({ path: '/leagues/create' })">Create League</v-btn>
        <v-btn outlined @click="$router.push({ path: '/leagues/join' })">Join League</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.info-text {
  font-size: 15px;
  color: grey;
}
header {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
