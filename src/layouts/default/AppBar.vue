<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <v-btn href="/" size="large" prepend-icon="mdi-web">https://www.nortonalmeida.dev</v-btn>
    </v-app-bar-title>
    <v-btn href="/" variant="tonal" class="ml-4">Home</v-btn>
    <v-btn href="/portfolio" variant="tonal" class="ml-4">Portfolio</v-btn>
    <v-btn href="/jokes" variant="tonal" class="ml-4">Jokes</v-btn>
    <v-btn href="/words" variant="tonal" class="ml-4">WordCounter</v-btn>
    <v-btn href="/password" variant="tonal" class="ml-4">Password Generator</v-btn>
    <v-btn href="https://www.linkedin.com/in/norton-almeida/" prepend-icon="mdi-linkedin" variant="tonal" class="ml-4">LinkedIn Profile</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
