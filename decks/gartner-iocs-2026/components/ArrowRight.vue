<!-- Horizontal arrow between two boxes: a line plus a filled or open head.
     Position and colour come from the caller (class="absolute left-[..] top-[..]" on the usage). -->
<script setup lang="ts">
withDefaults(defineProps<{
  w: number, h: number
  lineEnd: number, headBase: number, headTip: number, headHalf: number
  stroke: number
  color?: string
  open?: boolean
}>(), { color: 'var(--suse-jungle)', open: false })
</script>

<template>
  <svg :width="w" :height="h">
    <path :d="`M0 ${h / 2}h${lineEnd}`" :stroke="color" :stroke-width="stroke" />
    <path v-if="open" :d="`M${headBase} ${h / 2 - headHalf}l${headTip - headBase} ${headHalf} ${headBase - headTip} ${headHalf}`"
      fill="none" :stroke="color" :stroke-width="stroke" />
    <path v-else :d="`M${headBase} ${h / 2 - headHalf}l${headTip - headBase} ${headHalf} ${headBase - headTip} ${headHalf}z`" :fill="color" />
  </svg>
</template>
