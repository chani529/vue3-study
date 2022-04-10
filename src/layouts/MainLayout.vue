<template>
  <div class="wrapper">
    <TheHeader></TheHeader>
    <Background></Background>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { Background, TheHeader },
};
</script>

<style scope>
.wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
