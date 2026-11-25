<!-- Green dot with a check mark drawn as an SVG path, so it is centred exactly (a ✓ glyph sits off-centre) -->
<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 22 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 22 22" class="shrink-0">
    <circle cx="11" cy="11" r="11" fill="var(--suse-jungle)" />
    <path d="M6 11.4l3.6 3.4L16 7.8" fill="none" stroke="var(--suse-pine)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
