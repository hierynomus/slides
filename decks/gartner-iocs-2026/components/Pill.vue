<!-- Small rounded label ("Where it runs", "SOV-6 · Technology"). Position it from the caller with
     class="absolute left-[..] top-[..]"; `tone` picks the colours. -->
<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'jungle' | 'pine', w?: number, h?: number }>(), { tone: 'jungle', w: 116, h: 21 })
</script>

<template>
  <div class="pill" :class="`pill-${tone}`" :style="{ width: `${w}px`, height: `${h}px` }"><slot /></div>
</template>

<style scoped>
.pill {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}
.pill-jungle { background: var(--suse-jungle); color: var(--suse-pine); }
.pill-pine { background: var(--suse-pine); color: var(--suse-fog); }
</style>
