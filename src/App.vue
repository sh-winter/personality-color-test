<script setup lang="ts">
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container>
      <el-main>
        <home-view />
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style scoped></style>
