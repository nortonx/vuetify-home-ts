<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits(['updatePassword'])
const password = ref("");
const enableNumbers = ref(false);
const enableUppercaseLetters = ref(false);
const enableSpecialCharacters = ref(false);
const passwordLength = ref(8);
const passwordIsValid = ref(false)


function updatePassword(password: string) {
  if(password) console.log(password)
}

function checkNumbers(password: string) {
  return Boolean(password.match(/[0-9]/));
}

function checkUppercase(password: string) {
  return Boolean(password.match(/[A-Z]/));
}

function checkSpecialCharacters(password: string) {
  console.log("checking for special characters...");
}
function copyText() {
  navigator.clipboard.writeText(password.value)
}

function generatePassword() {
  const allowedNumbers = "0123456789";
  const allowedLetters = "abcdefghijklmnopqrstuvwxyz";
  const allowedUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const allowedSpecialCharacters = "!@#$%^&*()";
  let allowedCharacters = allowedLetters;

  if (enableNumbers.value) {
    allowedCharacters += allowedNumbers;
  }

  if (enableUppercaseLetters.value) {
    allowedCharacters += allowedUppercaseLetters;
  }

  if (enableSpecialCharacters.value) {
    allowedCharacters += allowedSpecialCharacters;
  }

  password.value = "";
  
  for (let i = 0; i < passwordLength.value; i++) {
    let randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    password.value += allowedCharacters.substring(randomNumber, randomNumber + 1);
  }
  validatePassword(password.value)
}

function validatePassword(password: string) {
  if (checkNumbers(password) 
      && checkUppercase(password)) {
        passwordIsValid.value = true;
    } else {
      passwordIsValid.value = false;
    }
}
</script>


<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          title="Password Generator"
          text="Default password is set to lowercase characters."
          class="m-4"
          elevation="3"
        >
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Password"
                v-model="password"
                clearable
                class="ml-4"
              >
              </v-text-field>
              <v-btn 
                @click="generatePassword"
                class="ml-4"
              >Generate<v-icon>mdi-replay</v-icon>
              </v-btn>
              <v-btn 
                @click="copyText"
                class="ml-2"
              >Copy</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="ml-4">
              <v-checkbox
                label="Numbers"
                v-model="enableNumbers"
                density="compact"
              ></v-checkbox>
              <v-checkbox
                label="Uppercase letters"
                v-model="enableUppercaseLetters"
                density="compact"
              ></v-checkbox>
              <v-checkbox
                label="Special characters"
                v-model="enableSpecialCharacters"
                density="compact"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="ml-4">
              <v-slider
                min="1"
                max="12"
                step="1"
                show-ticks="always"
                tick-size="2"
                :ticks="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                v-model="passwordLength"
                label="Number of characters:"
              >
              </v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="ml-4">
              <v-card
                v-if="passwordIsValid"
                text="Password is valid!"
                class="my-4 align-center d-flex"
              >
                <v-icon class="mr-6">mdi-checkbox-marked-circle</v-icon>
              </v-card>
              <v-card
                v-else
                text="Password does not match criteria"
                class="my-4 align-center d-flex"
              >
                <v-icon class="mr-6">mdi-cancel</v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

