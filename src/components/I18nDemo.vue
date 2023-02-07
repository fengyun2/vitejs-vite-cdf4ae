<script setup lang="ts">
// import { setLocale } from '../locales';
const props = defineProps({
  language: String,
});
const emit = defineEmits(['toggle']);
// const changeLocale = () => {
//   setLocale('zh');
//   emit('toggle');
// };
</script>

<template>
  <div>
    {{ $t('auth.SignIn') }}
    {{ $t('commons.height') }}
    <!-- <button @click="changeLocale">Change Locale</button> -->
  </div>
</template>
