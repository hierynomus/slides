<!-- Horizontal arrow between two boxes: a line plus a filled or open head.
     Position comes from the caller (class="absolute left-[..] top-[..]" on the usage).
     Pass `active` to animate: the line draws itself, then the head fades in. -->
<script setup lang="ts">
withDefaults(defineProps<{
  w: number, h: number
  lineEnd: number, headBase: number, headTip: number, headHalf: number
  stroke: number
  color?: string
  open?: boolean
  active?: boolean
}>(), { color: 'var(--suse-jungle)', open: false, active: undefined })
</script>

<template>
  <svg :width="w" :height="h">
    <path :d="`M0 ${h / 2}h${lineEnd}`" :stroke="color" :stroke-width="stroke" pathLength="1"
      :style="active === undefined ? undefined : { strokeDasharray: 1, strokeDashoffset: active ? 0 : 1, transition: 'stroke-dashoffset 0.6s ease-out' }" />
    <g :style="active === undefined ? undefined : { opacity: active ? 1 : 0, transition: 'opacity 0.2s', transitionDelay: active ? '0.6s' : '0s' }">
      <path v-if="open" :d="`M${headBase} ${h / 2 - headHalf}l${headTip - headBase} ${headHalf} ${headBase - headTip} ${headHalf}`"
        fill="none" :stroke="color" :stroke-width="stroke" />
      <path v-else :d="`M${headBase} ${h / 2 - headHalf}l${headTip - headBase} ${headHalf} ${headBase - headTip} ${headHalf}z`" :fill="color" />
    </g>
  </svg>
</template>
