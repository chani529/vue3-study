<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="5">Board</el-menu-item>
      <el-menu-item index="4">History</el-menu-item>
      <el-menu-item index="3">AD</el-menu-item>
      <el-menu-item index="2">
        <router-link to="/filmography">Filmography</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/album">Album</router-link>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HOME",
  setup() {
    const activeIndex = ref("1");

    return { activeIndex };
  },
};
</script>

<style lang="scss" scope>
$IU-Header-Pink: rgba(242, 226, 220, 0.9);
$IU-Header-Black: rgba(13, 13, 13, 0.75);
.el-menu--horizontal {
  flex-direction: row-reverse;
  background-color: #66339900 !important;
  margin-right: 70px !important;
  border-bottom: 0 !important;
}
.el-menu--horizontal > .el-menu-item {
  padding: 20px;
  font-size: 2rem;
  color: #e7e7e7 !important;
  border-bottom: 0 !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: transparent !important;
  border-bottom: 0 !important;
}
</style>
