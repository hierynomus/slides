<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <div class="suse-logo" :style="{ '--logo-size': `${size ?? 16}px` }">
    <img src="/images/geeko.png" alt="" />
    <span>SUSE</span>
  </div>
</template>

<style scoped>
.suse-logo {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--logo-size) * 0.3);
  font-size: var(--logo-size);
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1;
}
.suse-logo img {
  height: calc(var(--logo-size) * 1.05);
}
</style>
