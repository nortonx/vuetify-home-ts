<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          title="Github repositories:"
        >
          <loader v-if="isLoading"></loader>
          <v-list lines="one" v-else>
            <v-list-item
              v-for="repo in repositories"
              :key="repo.id"
              :title="repo.full_name"
              :subtitle="repo.description"
              :href="repo.html_url"
            >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Loader from '../components/Loader.vue';

const GITHUB_URL = `https://api.github.com/users/nortonx/repos`;
const repositories = ref();
const isLoading = ref(false);

async function getRepos() {
  isLoading.value = true;
  try {
    const response = await axios.get(GITHUB_URL);
    repositories.value = response.data;
    isLoading.value = false;
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}

onMounted( () => {
  repositories.value = getRepos();
})

</script>
