<!-- Absolutely positioned box in slide pixels (canvas is 720×405, matching the original deck's points) -->
<script setup lang="ts">
defineProps<{ x: number, y: number, w?: number, h?: number }>()
</script>

<template>
  <div
    class="absolute"
    :style="{ left: `${x}px`, top: `${y}px`, width: w ? `${w}px` : undefined, height: h ? `${h}px` : undefined }"
  >
    <slot />
  </div>
</template>
