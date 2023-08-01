<script lang="ts" setup>
defineProps<{
  title: string,
  text: number
}>()

</script>
<template>
  <v-card
    variant="outlined"
  >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="text-h6">{{ text }}</v-card-text>
  </v-card>
</template>