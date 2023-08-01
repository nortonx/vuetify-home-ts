<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <CreateJokesForm />
      </v-col>
      <v-col cols="12" md="6">
        <JokeList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import CreateJokesForm from '@/components/jokes/CreateFormJoke.vue';
  import JokeList from '@/components/jokes/JokeList.vue';
</script>
