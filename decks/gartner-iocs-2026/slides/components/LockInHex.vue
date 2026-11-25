<!-- The six dependencies that accumulate around a model, grouped in three arcs. Fills the whole slide.
     `clicks` reveals the text beside the hexagon in pairs (1+2, 3+4, 5+6); the hexagon and pills stay put; leave it out to show everything. -->
<script setup lang="ts">
const props = withDefaults(defineProps<{ offsetY?: number, clicks?: number }>(), { offsetY: 0 })

// Dependencies are revealed in pairs: 1+2, 3+4, 5+6
const shown = (group: number) => props.clicks === undefined || props.clicks >= group
const groupOf = (n: number) => Math.ceil(n / 2)

const nodes = [
  { n: 1, x: 309.5, y: 148.5, fill: 'var(--suse-jungle)', text: 'var(--suse-pine)' },
  { n: 2, x: 409.5, y: 148.5, fill: 'var(--suse-jungle)', text: 'var(--suse-pine)' },
  { n: 3, x: 459.5, y: 234.5, fill: 'var(--suse-forest)', text: 'var(--suse-fog)' },
  { n: 4, x: 409.5, y: 321.5, fill: 'var(--suse-forest)', text: 'var(--suse-fog)' },
  { n: 5, x: 309.5, y: 322.5, fill: 'var(--suse-mint)', text: 'var(--suse-pine)' },
  { n: 6, x: 260.5, y: 234.5, fill: 'var(--suse-mint)', text: 'var(--suse-pine)' },
]
const fillOf = (n: number) => nodes[n - 1].fill
const textOf = (n: number) => nodes[n - 1].text

const left = [
  { n: 1, y: 127, title: 'Knowledge', lines: ['Indexes only work with the', 'model that built them'] },
  { n: 6, y: 209, title: 'Jurisdiction', lines: ['Whose law applies to your', 'prompts and context'] },
  { n: 5, y: 290, title: 'Compute and capacity', lines: ['Reserved capacity and', 'scarce chips'] },
]
const right = [
  { n: 2, y: 127, title: 'Memory', lines: ['What the AI learns about', 'you stays in their store'] },
  { n: 3, y: 209, title: 'Workflows and agents', lines: ['Processes built on an', 'interface they can retire'] },
  { n: 4, y: 290, title: 'Behaviour', lines: ['Prompts tuned to a model', 'that can change'] },
]
</script>

<template>
  <div class="absolute inset-0" :style="{ transform: `translateY(${props.offsetY}px)` }">
  <svg viewBox="0 0 720 405" class="absolute inset-0 w-full h-full">
    <polygon :points="nodes.map(p => `${p.x},${p.y}`).join(' ')"
      fill="var(--suse-fog)" stroke="var(--suse-pine)" stroke-width="1.5" stroke-dasharray="6 5" />
    <circle cx="358.5" cy="233.5" r="47.5" fill="var(--suse-pine)" />
    <text x="358.5" y="240" text-anchor="middle" fill="var(--suse-fog)" style="font-size: 18px; font-weight: 700">Model</text>
    <g v-for="p in nodes" :key="p.n">
      <circle :cx="p.x" :cy="p.y" r="16.5" fill="#fff" stroke="var(--suse-pine)" stroke-width="1.5" stroke-dasharray="3 2.5" />
      <circle :cx="p.x" :cy="p.y" r="11.5" :fill="p.fill" />
      <text :x="p.x" :y="p.y + 5" text-anchor="middle" :fill="p.text" style="font-size: 14px; font-weight: 700">{{ p.n }}</text>
    </g>
    <!-- Arc labels -->
    <rect x="305" y="99" width="111" height="21" rx="10.5" fill="var(--suse-jungle)" />
    <text x="360.5" y="113" text-anchor="middle" fill="var(--suse-pine)" style="font-size: 10px">What it knows</text>
    <g transform="translate(247 296) rotate(61)">
      <rect x="-56" y="-10.5" width="112" height="21" rx="10.5" fill="var(--suse-mint)" />
      <text y="3.5" text-anchor="middle" fill="var(--suse-pine)" style="font-size: 10px">Where it runs</text>
    </g>
    <g transform="translate(472.5 296.5) rotate(-61)">
      <rect x="-56" y="-10.5" width="112" height="21" rx="10.5" fill="var(--suse-forest)" />
      <text y="3.5" text-anchor="middle" fill="var(--suse-fog)" style="font-size: 10px">How you work</text>
    </g>
  </svg>

  <div v-for="l in left" :key="l.n" class="absolute flex justify-end gap-[8px] fade" :class="{ hidden: !shown(groupOf(l.n)) }"
    :style="{ left: '20px', width: '195px', top: `${l.y}px` }">
    <div class="text-right">
      <div class="font-bold text-[14px] leading-[17px]">{{ l.title }}</div>
      <div v-for="t in l.lines" :key="t" class="text-[12px] leading-[14.5px]">{{ t }}</div>
    </div>
    <span class="badge w-[26px] h-[26px] shrink-0" :style="{ background: fillOf(l.n), color: textOf(l.n) }">{{ l.n }}</span>
  </div>
  <div v-for="r in right" :key="r.n" class="absolute flex gap-[8px] fade" :class="{ hidden: !shown(groupOf(r.n)) }"
    :style="{ left: '505px', width: '200px', top: `${r.y}px` }">
    <span class="badge w-[26px] h-[26px] shrink-0" :style="{ background: fillOf(r.n), color: textOf(r.n) }">{{ r.n }}</span>
    <div>
      <div class="font-bold text-[14px] leading-[17px]">{{ r.title }}</div>
      <div v-for="t in r.lines" :key="t" class="text-[12px] leading-[14.5px]">{{ t }}</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.fade { transition: opacity 0.6s ease-out; }
.hidden { opacity: 0; }
</style>
