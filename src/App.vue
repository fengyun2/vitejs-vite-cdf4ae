<script setup lang="ts">
import { computed, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import { ElConfigProvider } from 'element-plus';
import { setLocale } from './locales';
import HelloWorld from './components/HelloWorld.vue';
import I18nDemo from './components/I18nDemo.vue';

const language = ref('en');
const locale = computed(() => (language.value === 'zh' ? zhCn : en));

const toggle = () => {
  language.value = language.value === 'zh' ? 'en' : 'zh';
  setLocale(language.value);
};
</script>

<template>
  <el-config-provider :locale="locale">
    <HelloWorld msg="Hi~" />
    <el-button mb-2 @click="toggle">Switch Language</el-button>
    <br />
    <I18nDemo :language="language" :toggle="toggle" />
  </el-config-provider>
</template>

<style scoped></style>
