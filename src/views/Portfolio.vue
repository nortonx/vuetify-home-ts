<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          title="Github repositories:"
        >
          <v-list lines="one">
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

const GITHUB_URL = `https://api.github.com/users/nortonx/repos`;
const repositories = ref();

async function getRepos() {
  const response = await axios.get(GITHUB_URL);
  repositories.value = response.data;
}

onMounted( () => {
  repositories.value = getRepos();
})

</script>
