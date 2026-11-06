<!-- Bar chart: negative sentiment towards VMware's new ownership, 2024–2026. The default slot is the quote shown above the bars -->
<script setup lang="ts">
// top/bottom match the stack of lesson cards beside the chart (see ThreeLessons)
withDefaults(defineProps<{ top?: number, bottom?: number }>(), { top: 90, bottom: 336 })

const bars = [
  { year: 2024, value: 33, x: 39, color: '#42d29f' },
  { year: 2025, value: 64, x: 117, color: 'var(--suse-jungle)' },
  { year: 2026, value: 76, x: 195, color: 'var(--suse-teal)' },
]
// Bar heights are scaled so 76% is 70px tall
const height = (v: number) => Math.round(v * 70 / 76)
const base = 303
</script>

<template>
  <At :x="26" :y="top" :w="264" :h="bottom - top" class="rounded-[14px] bg-white border border-[#ccc]">
    <p class="absolute left-[13px] top-[12px] w-[238px] text-[11px] leading-[14px] m-0"><slot /></p>
  </At>
  <template v-for="b in bars" :key="b.year">
    <At :x="b.x" :y="base - height(b.value)" :w="68" :h="height(b.value)" class="rounded-t-[8px]" :style="{ background: b.color }" />
    <At :x="b.x" :y="base - height(b.value) - 32" :w="68" class="text-center font-mono text-[24px] font-bold">{{ b.value }}%</At>
    <At :x="b.x" :y="base + 1" :w="68" class="text-center text-[14px] font-bold">{{ b.year }}</At>
  </template>
</template>
