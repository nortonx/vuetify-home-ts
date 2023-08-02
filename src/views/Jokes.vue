<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card 
          title="Jokes"
          text="Small example implemented using Vue3, Vuetify & Pinia"
          class="my-4"
          variant="tonal"
        >

        </v-card>
        <v-btn href="https://www.thisdot.co/blog/getting-started-with-vuetify-in-vue-3/">Credits: https://www.thisdot.co/blog/getting-started-with-vuetify-in-vue-3/</v-btn>
      </v-col>
    </v-row>
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
