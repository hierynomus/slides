<!-- The three lessons from the virtualization shake-up, as stacked cards on the right of the slide -->
<script setup lang="ts">
withDefaults(defineProps<{ ys?: number[] }>(), { ys: () => [97, 180, 264] })

const lessons = [
  { title: '1 · Map your dependencies', detail: 'You cannot plan around a change you cannot see' },
  { title: '2 · Build exit paths', detail: 'Switching costs show up on the way out.' },
  { title: '3 · Keep control', detail: 'Negotiating strength comes from options you can use' },
]
</script>

<template>
  <At v-for="(l, i) in lessons" :key="l.title" :x="308" :y="ys[i]" :w="379" :h="64"
    class="rounded-[8px] bg-[var(--suse-pine)] px-[12px] pt-[8px]">
    <div class="text-[16px] font-bold text-[var(--suse-fog)]">{{ l.title }}</div>
    <div class="text-[14px] text-mint mt-[3px]">{{ l.detail }}</div>
  </At>
</template>
