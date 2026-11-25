<!-- The three lessons from the virtualization shake-up, as stacked cards on the right of the slide -->
<script setup lang="ts">
withDefaults(defineProps<{ ys?: number[] }>(), { ys: () => [90, 181, 272] })

const lessons = [
  { title: 'Map your dependencies', detail: 'You cannot plan around a change you cannot see' },
  { title: 'Build exit paths', detail: 'Switching costs show up on the way out.' },
  { title: 'Keep control', detail: 'Negotiating strength comes from options you can use' },
]
</script>

<template>
  <At v-for="(l, i) in lessons" :key="l.title" :x="308" :y="ys[i]" :w="379" :h="64"
    class="flex items-center gap-[14px] rounded-[8px] bg-[var(--suse-pine)] px-[14px]">
    <span class="badge w-[34px] h-[34px] shrink-0 text-[18px] bg-[var(--suse-jungle)] text-[var(--suse-pine)]">{{ i + 1 }}</span>
    <div>
      <div class="text-[16px] font-bold leading-[20px] text-[var(--suse-fog)]">{{ l.title }}</div>
      <div class="mt-[3px] text-[13px] font-light leading-[16px] text-[#c4d3cf]">{{ l.detail }}</div>
    </div>
  </At>
</template>
