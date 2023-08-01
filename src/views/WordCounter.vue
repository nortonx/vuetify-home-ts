<script lang="ts" setup>
import Box from '../components/wordCounter/Box.vue';
import Textarea from '../components/wordCounter/Textarea.vue';
import { ref } from 'vue';
const emit = defineEmits(['updateText'])

const words = ref(0);
const characters = ref(0);
const sentences = ref(0);
const paragraphs = ref(0);
const textContent = ref("");

function countWords(content: string) {
  words.value = content.split(" ").length;
  return words;
}

function countCharacters(content: string) {
  characters.value = content.length;
  return characters;
}

function countSentences(content: string) {
  const result = content.match(/[^\.!\?]+[\.!\?]+/g);
  sentences.value = result?.length ?? 0 ;
  return sentences;
}

function countParagraphs(content: string) {
  const result = content.split(/\r?\n/);
  paragraphs.value = result?.length;
  return paragraphs;
}

function updateText(content: string) {
  countWords(content);
  countCharacters(content);
  countSentences(content);
  countParagraphs(content);
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row justify="space-between">
          <v-col cols="3">
            <Box title="Words" :text="words" />
          </v-col>
          <v-col cols="3">
            <Box title="Characters" :text="characters" />
          </v-col>
          <v-col cols="3">
            <Box title="Sentences" :text="sentences" />
          </v-col>
          <v-col cols="3">
            <Box title="Paragraphs" :text="paragraphs" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <Textarea v-model="textContent" @update-text="updateText" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" offset="11">
            <v-btn @click="emit('updateText', textContent)">Process</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>