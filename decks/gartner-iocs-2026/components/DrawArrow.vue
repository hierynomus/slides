<!-- Arrow that draws itself when `active` turns true; the head fades in once the line is done -->
<script setup lang="ts">
defineProps<{ active: boolean }>()
</script>

<template>
  <svg width="90" height="12">
    <path d="M0 6h84" pathLength="1" fill="none" stroke="var(--suse-pine)" stroke-width="1.5"
      style="stroke-dasharray: 1; transition: stroke-dashoffset 0.6s ease-out" :style="{ strokeDashoffset: active ? 0 : 1 }" />
    <path d="M78 1l8 5-8 5" fill="none" stroke="var(--suse-pine)" stroke-width="1.5"
      class="transition-opacity duration-200" :style="{ opacity: active ? 1 : 0, transitionDelay: active ? '0.6s' : '0s' }" />
  </svg>
</template>
