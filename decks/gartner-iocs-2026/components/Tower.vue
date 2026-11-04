<!-- A castle tower: an SVG silhouette (body plus five evenly spaced merlons, flush with both edges)
     with a little stonework (shaded merlons, cornice, plinth) drawn in the text colour
     at low opacity so it works on light and dark towers alike. Content goes in the default slot.
     Positioned like <At>. -->
<script setup lang="ts">
const props = defineProps<{ x: number, y: number, w: number, h: number, bg: string, fg: string }>()

const MERLON_W = 21
const MERLON_H = 18
const MERLONS = 5

// One path: the body, with a notch between each pair of merlons
const gap = (props.w - MERLONS * MERLON_W) / (MERLONS - 1)
const path = [
  ...Array.from({ length: MERLONS }, (_, i) => {
    const x = i * (MERLON_W + gap)
    return `M${x} 0h${MERLON_W}v${MERLON_H}h-${MERLON_W}z`
  }),
  `M0 ${MERLON_H - 1}h${props.w}v${props.h}h-${props.w}z`,
].join('')

const top = MERLON_H - 1 // y of the tower body's top edge inside the svg
const merlonXs = Array.from({ length: MERLONS }, (_, i) => i * (MERLON_W + gap))
</script>

<template>
  <At :x="x" :y="y" :w="w" :h="h" :style="{ color: fg }">
    <svg class="absolute left-0" :style="{ top: `-${MERLON_H - 1}px` }" :width="w" :height="h + MERLON_H - 1" :viewBox="`0 0 ${w} ${h + MERLON_H - 1}`" overflow="visible">
      <path :d="path" :fill="bg" />
      <g :fill="fg">
        <!-- shaded right edge on each merlon gives them depth -->
        <rect v-for="mx in merlonXs" :key="mx" :x="mx + MERLON_W - 4" y="0" width="4" :height="top" opacity=".08" />
        <!-- cornice under the battlements, and plinth at the foot -->
        <rect x="0" :y="top" :width="w" height="5" opacity=".1" />
        <rect x="0" :y="top + h - 7" :width="w" height="7" opacity=".12" />
      </g>
    </svg>
    <div class="relative"><slot /></div>
  </At>
</template>
