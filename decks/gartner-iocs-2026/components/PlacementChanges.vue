<!-- "Placement is not permanent": the rings plus four numbered events, one per click.
     1 provider revokes access (no arrow), 2 regulation pulls the workload inward,
     3 a new version upgrades it in place, 4 a frontier model pulls it outward. -->
<script setup lang="ts">
defineProps<{ clicks: number }>()

const events = [
  { n: 1, x: 79.5, y: 134.5, f: '#9e9e9e', t: '#efefef' },
  { n: 2, x: 201.5, y: 158.5, f: 'var(--suse-pine)', t: '#fff', arrow: 'M194 166 L177 187', head: 'M177.9 185.8 L177 187' },
  { n: 3, x: 149.5, y: 266.5, f: 'var(--suse-persimmon)', t: 'var(--suse-pine)', arrow: 'M137 258 A16 16 0 1 0 163.8 258.6', head: 'M164.8 260.5 A16 16 0 0 0 163.8 258.6' },
  { n: 4, x: 91.5, y: 271.5, f: 'var(--suse-jungle)', t: '#efefef', arrow: 'M84 279 L52 311', head: 'M53 310 L52 311' },
]
</script>

<template>
  <svg class="absolute left-0 top-0" width="720" height="405">
    <defs>
      <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--suse-pine)" />
      </marker>
    </defs>
    <RingsBase />
    <text x="150" y="114" text-anchor="middle" style="font-size: 12px; font-weight: 700">Standard</text>
    <text x="150" y="144" text-anchor="middle" style="font-size: 12px; font-weight: 700">Regulated</text>
    <text x="150" y="176" text-anchor="middle" style="font-size: 12px; font-weight: 700">Sensitive</text>
    <text x="150" y="222" text-anchor="middle" fill="#fff" style="font-size: 12px; font-weight: 700">Strategic</text>
    <g v-for="(m, i) in events" :key="m.n" class="transition-opacity duration-500" :class="{ 'opacity-0': clicks <= i }">
      <!-- the head is a separate stub that fades in once the line has been drawn -->
      <path v-if="m.arrow" :d="m.arrow" pathLength="1" fill="none" stroke="var(--suse-pine)" stroke-width="2"
        style="stroke-dasharray: 1; transition: stroke-dashoffset 0.7s ease-out" :style="{ strokeDashoffset: clicks > i ? 0 : 1 }" />
      <path v-if="m.head" :d="m.head" fill="none" stroke="var(--suse-pine)" stroke-width="2" marker-end="url(#arrowhead)"
        class="transition-opacity duration-200" :style="{ opacity: clicks > i ? 1 : 0, transitionDelay: clicks > i ? '0.7s' : '0s' }" />
      <circle :cx="m.x" :cy="m.y" r="10.5" :fill="m.f" />
      <text :x="m.x" :y="m.y + 5" text-anchor="middle" :fill="m.t" style="font-size: 14px; font-weight: 700">{{ m.n }}</text>
    </g>
  </svg>
</template>
