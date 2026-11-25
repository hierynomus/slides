<!-- Quote card on negative sentiment towards VMware's new ownership. The default slot is the quote -->
<script setup lang="ts">
// top/bottom match the stack of lesson cards beside the card (see ThreeLessons)
withDefaults(defineProps<{ top?: number, bottom?: number }>(), { top: 90, bottom: 336 })
</script>

<template>
  <At :x="26" :y="top" :w="264" :h="bottom - top" class="rounded-[14px] bg-white border border-[#ccc]">
    <p class="absolute left-[16px] top-[16px] w-[232px] text-[16px] leading-[21px] m-0"><slot /></p>
  </At>
</template>
