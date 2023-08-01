<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['updateText'])
const text = ref("");

</script>
<template>
  <v-textarea 
    label="Type your text here" 
    no-resize 
    counter 
    v-model="text" 
    @change="emit('updateText', text)"
    variant="outlined"
  >
    {{ text }}
  </v-textarea>
</template>