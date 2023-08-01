<script lang="ts" setup>
defineProps<{
  title: string,
  text: number
}>()

</script>
<template>
  <v-card
    width="200"
  >
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ text }}</v-card-text>
    </v-card-item>
  </v-card>
</template>