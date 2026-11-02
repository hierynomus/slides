<!-- "Not every AI workload needs to be in the keep": the rings with one numbered marker per level -->
<script setup lang="ts">
const markers = [
  { y: 108.5, f: 'var(--suse-pine)', t: '#fff' },
  { y: 138.5, f: 'var(--suse-pine)', t: '#fff' },
  { y: 170.5, f: 'var(--suse-pine)', t: '#fff' },
  { y: 218.5, f: 'var(--suse-jungle)', t: 'var(--suse-pine)' },
]
</script>

<template>
  <svg class="absolute left-0 top-0" width="720" height="405">
    <RingsBase />
    <g v-for="(m, i) in markers" :key="i">
      <circle cx="149.5" :cy="m.y" r="10.5" :fill="m.f" />
      <text x="149.5" :y="m.y + 5" text-anchor="middle" :fill="m.t" style="font-size: 14px; font-weight: 700">{{ i + 1 }}</text>
    </g>
  </svg>
</template>
