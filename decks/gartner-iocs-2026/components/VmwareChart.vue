<!-- Bar chart: negative sentiment towards VMware's new ownership, 2024–2026 -->
<script setup lang="ts">
// top/bottom match the stack of lesson cards beside the chart (see ThreeLessons)
withDefaults(defineProps<{ title: string, top?: number, bottom?: number }>(), { top: 97, bottom: 328 })

const bars = [
  { year: 2024, value: 33, x: 39, color: '#42d29f' },
  { year: 2025, value: 64, x: 117, color: 'var(--suse-jungle)' },
  { year: 2026, value: 76, x: 195, color: 'var(--suse-teal)' },
]
// Bar heights in the original are scaled so 76% is 107px tall
const height = (v: number) => Math.round(v * 107 / 76)
</script>

<template>
  <At :x="26" :y="top" :w="264" :h="bottom - top" class="rounded-[14px] bg-white border border-[#ccc]">
    <div class="absolute left-[13px] top-[10px] w-[230px] text-[14px] font-bold leading-[17px]">{{ title }}</div>
  </At>
  <template v-for="b in bars" :key="b.year">
    <At :x="b.x" :y="297 - height(b.value)" :w="68" :h="height(b.value)" :style="{ background: b.color }" />
    <At :x="b.x" :y="297 - height(b.value) - 32" :w="68" class="text-center text-[24px] font-bold">{{ b.value }}%</At>
    <At :x="b.x" :y="298" :w="68" class="text-center text-[14px] font-bold">{{ b.year }}</At>
  </template>
</template>
